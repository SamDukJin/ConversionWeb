import React from "react";
import { useState } from "react";

function CurrencyPage(){
     const [amount, setAmount] = useState('');
     const [fromCur, setFromCur] = useState('THB');
     const [toCur, settoCur] = useState('USD');
     const [result, setResult] = useState(null);
     const [rate, setRate] = useState(null);

     const handleConvert = async () => {
          try{
               const res = await fetch(`http://localhost:8000/convert_currency?from_currency=${fromCur}&to_currency=${toCur}&amount=${amount}`);
               const data = await res.json();
               if (data.result !== undefined){
                    setResult(data.result);
                    setRate(data.rate);
               } else {
                    setResult("Error: " + (data.error || "Invalid Response."));
                    setRate(null);
               }
          } catch {
               setResult("Error connecting to server.")
               setRate(null);
          }
     };

     return (
          <div className="currency-page">
               <h2>Currency Convertor</h2>
               <div className="form-group">
                    <input 
                         type="number" 
                         placeholder="Amount..."
                         value={amount}
                         onChange={(e)=>setAmount(e.target.value)}
                    />

                    <select value={fromCur} onChange={(e)=>setFromCur(e.target.value)}>
                         <option value="THB">THB</option>
                         <option value="USD">USD</option>
                         <option value="EUR">EUR</option>
                    </select>

                    <span>→</span>

                    <select value={toCur} onChange={(e)=>settoCur(e.target.value)}>
                         <option value="THB">THB</option>
                         <option value="USD">USD</option>
                         <option value="EUR">EUR</option>
                    </select>

                    <button onClick={handleConvert}>Convert</button>
               </div>    

               {result !== null &&(
                    <div className="result">
                         <p>{amount} {fromCur} = {result} {toCur}</p>
                         {rate && <p>Exchange Rate: {fromCur} = {rate} {toCur}</p>}
                    </div>
               )}
          </div>
     );
}

export default CurrencyPage