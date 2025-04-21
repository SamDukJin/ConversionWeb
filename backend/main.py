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
