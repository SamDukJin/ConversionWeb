from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
     CORSMiddleware,
     allow_origins=["http://localhost:5173"],
     allow_credentials=True,
     allow_methods=["*"],
     allow_headers=["*"]
)

@app.get("/convert_currency")
def convert_currency(
     from_currency: str = Query(..., min_length=3),
     to_currency: str = Query(..., min_length=3),
     amount: float = Query(..., gt=0)
):
     url = f"https://moneymorph.dev/api/convert/{amount}/{from_currency.upper()}/{to_currency.upper()}"

     try:
          response = requests.get(url)
          response.raise_for_status()  # Raise error if status != 200
          data = response.json()
          
          return {
               "from":data["request"]["from"],
               "to": data["request"]["to"],
               "amount": data["request"]["amount"],
               "rate": round(data["meta"]["rate"],4),
               "result": round(data["response"],4)
          }

     
     except requests.exceptions.RequestException as e:
          return {"error": str(e)}
