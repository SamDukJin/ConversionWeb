import React, { useState, useEffect } from "react";
// import { lengthConversion_list } from "../assets/DataStorage";


function LengthPage() {
     // const [amount, setAmount] = useState("1");
     // const [fromUnit, setFromUnit] = useState("cm");
     // const [toUnit, setToUnit] = useState("in");
     // const [result, setResult] = useState(null);
     // const [rate, setRate] = useState(null);

     // useEffect(() => {
     //      const convert = async () => {
     //           const res = await fetch(
     //                `http://localhost:8000/convert_length?from_unit=${fromUnit}&to_unit=${toUnit}&amount=${amount}`
     //           );
     //           const data = await res.json();
     //           setResult(data.result);
     //           setRate(data.rate);
     //      };
     //      convert();
     // }, [amount, fromUnit, toUnit]);

     // return (
     //      <div>
     //           <h1>Length Conversion</h1>
     //           <p>
     //                {amount} {fromUnit} = {result} {toUnit}
     //           </p>
     //           <p>
     //                {amount} {fromUnit} * {rate} = {result} {toUnit}
     //           </p>
     //           <form>
     //                <label>
     //                     Amount:
     //                     <input
     //                          type="number"
     //                          value={amount}
     //                          onChange={(e) => setAmount(e.target.value)}
     //                     />
     //                </label>
     //                <label>
     //                     From:
     //                     <select
     //                          value={fromUnit}
     //                          onChange={(e) => setFromUnit(e.target.value)}
     //                     >
     //                          {lengthConversion_list.map((item) => (
     //                               <option value={item.code}>{item.name}</option>
     //                          ))}
     //                     </select>
     //                </label>
     //                <label>
     //                     To:
     //                     <select
     //                          value={toUnit}
     //                          onChange={(e) => setToUnit(e.target.value)}
     //                     >
     //                          {lengthConversion_list.map((item) => (
     //                               <option value={item.code}>{item.name}</option>
     //                          ))}
     //                     </select>
     //                </label>
     //           </form>
     //      </div>
     // );
}


export default LengthPage;
