from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Query, Depends, HTTPException, Request
from sqlalchemy.orm import Session
import requests
from . import schemas
from . import models
from .models.user import Base
from . import auth
from . import database

app = FastAPI()

app.add_middleware(
     CORSMiddleware,
     allow_origins=["http://localhost:5173"],
     allow_credentials=True,
     allow_methods=["*"],
     allow_headers=["*"]
)

def format_currency(amount, minimum=2, maximum=4):
     return f"{amount:,.{minimum}f}".rstrip('0').rstrip('.') if '.' in f"{amount:,.{minimum}f}" else f"{amount:,.{minimum}f}"

@app.get("/convert_currency")
def convert_currency(
     from_currency: str = Query(..., min_length=3),
     to_currency: str = Query(..., min_length=3),
     amount: float = Query(..., gt=0)
):
     if from_currency.upper() == to_currency.upper():
          formatted = format_currency(amount)
          return {
               "from": from_currency.upper(),
               "to": to_currency.upper(),
               "amount": formatted,
               "rate": "1.00",
               "result": formatted
          }

     url = f"https://moneymorph.dev/api/convert/{amount}/{from_currency.upper()}/{to_currency.upper()}"

     try:
          response = requests.get(url)
          response.raise_for_status()
          data = response.json()

          formatted_amount = format_currency(data["request"]["amount"])
          formatted_rate = format_currency(data["meta"]["rate"], 4, 4)
          formatted_result = format_currency(data["response"], 2, 4)

          return {
               "from": data["request"]["from"],
               "to": data["request"]["to"],
               "amount": formatted_amount,
               "rate": formatted_rate,
               "result": formatted_result
          }

     except requests.exceptions.RequestException as e:
          return {"error": str(e)}

@app.post("/register", response_model=schemas.UserOut)
def register(user: schemas.UserCreate, db: Session = Depends(database.get_db)):
     existing_user = db.query(models.User).filter(
          (models.User.username == user.username) | (models.User.email == user.email)
     ).first()


     if existing_user:
          raise HTTPException(status_code=400, detail="Username or email already exists")

     hashed_password = auth.hash_password(user.password)
     new_user = models.User(
          username=user.username,
          email=user.email,
          hashed_password=hashed_password
     )
     db.add(new_user)
     db.commit()
     db.refresh(new_user)

     return new_user

@app.post("/login")
def login(user: schemas.UserLogin, db: Session = Depends(database.get_db)):
     db_user = db.query(models.User).filter(models.User.username == user.username).first()
     if not db_user or not auth.verify_password(user.password, db_user.hashed_password):
          raise HTTPException(status_code=401, detail="Invalid username or password")

     token = auth.create_token(user.username)
     return {
          "token": token,
          "username": db_user.username
     }

Base.metadata.create_all(bind=database.engine)
