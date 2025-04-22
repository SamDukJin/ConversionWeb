import React, { useState, useEffect } from "react";
import {currencyList} from "../assets/DataStorage"

function CurrencyPage() {
     const [amount, setAmount] = useState("1");
     const [fromCur, setFromCur] = useState("THB");
     const [toCur, setToCur] = useState("USD");
     const [result, setResult] = useState(null);
     const [rate, setRate] = useState(null);
     const [displayAmount, setDisplayAmount] = useState("1");
     const [isLoading, setIsLoading] = useState(false);
        
     const handleConvert = async () => {
     if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
          setResult("Please enter a valid amount.");
          setRate(null);
          return;
     }

     setIsLoading(true);

     try {
          const res = await fetch(
          `http://localhost:8000/convert_currency?from_currency=${fromCur}&to_currency=${toCur}&amount=${amount}`
          );
          const data = await res.json();

          if (data.result !== undefined) {
          setResult(data.result);         // Already formatted string from backend
          setRate(data.rate);             // Already formatted string from backend
          setDisplayAmount(data.amount);  // Already formatted string from backend
          } else {
          setResult("Error: " + (data.error || "Invalid response."));
          setRate(null);
          }
     } catch (err) {
          setResult("Error connecting to server.");
          setRate(null);
     } finally {
          setIsLoading(false);
     }
     };

     // Auto-convert when amount or currencies change (with debounce)
     useEffect(() => {
          if (!amount || isNaN(amount)) return;

          const timeout = setTimeout(() => {
               handleConvert();
          }, 500); // Delay after user stops typing

          return () => clearTimeout(timeout);
     }, [amount, fromCur, toCur]);

     useEffect(() => {
          handleConvert();
     }, []);

     return (
     <div className="currency-page">
          <h2>Currency Converter</h2>

          <div className="form-group">
          <input
               type="number"
               placeholder="Amount..."
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
          />

          <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
               {currencyList.map((cur)=> (
                    <option key={cur.code} value = {cur.code}>{cur.name}</option>
               ))}
          </select>

          <span id="arrow">→</span>

          <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
               {currencyList.map((cur)=> (
                    <option key={cur.code} value = {cur.code}>{cur.name}</option>
               ))}
          </select>

          <button 
               onClick={handleConvert} 
               disabled={isLoading}
               className="button-cur"
          >
               {isLoading ? "Converting..." : "Convert"}
          </button>
          </div>

          {result && (
          <div className="result">
               <p>{displayAmount} {fromCur} = {result} {toCur}</p>
               {rate && (
               <p>Exchange Rate: 1 {fromCur} = {rate} {toCur}</p>
               )}
          </div>
          )}
     </div>
     );
}

export default CurrencyPage;
