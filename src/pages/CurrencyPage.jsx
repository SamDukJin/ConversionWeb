import React from "react";
import { useState, useEffect} from "react";

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
               if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
                    setResult("Please enter a valid amount.");
                    return;
                  }
               if (data.result !== undefined){
                    setResult(data.result.toLocaleString(undefined, {
                         minimumFractionDigits:2,
                         maximumFractionDigits:4
                    }));
                    setRate(data.rate);
               } else if (fromCur === toCur){
                    setResult(parseFloat(amount).toLocaleString(undefined, {
                         minimumFractionDigits:2,
                         maximumFractionDigits:4
                    }));
                    setRate(1);
                    return;
               }else {
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