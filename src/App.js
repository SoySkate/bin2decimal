import './App.css';
import React from "react";
import { useEffect, useState } from "react";

function App() {
const [inputValue, setInputValue] = useState('');
const [result, setResult] = useState(null);

const convertFunction=() =>{
  const splitArray = inputValue.split([]).map((num, index)=> parseInt(num));
  const poweredArray = splitArray.reverse().map((n, index)=>n*(Math.pow(2,index))); 
  return setResult(poweredArray?.reduce((a, b)=>a+b,0));
}




return(
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline my-10">
          Binary2Decimal</h1>
        <p>This is a simple converter about binary numbers to decimal numbers</p>
        <p>Write your binary number:</p>
        <div>
           <input className='my-10 text-black rounded-md' type='number' value={inputValue}  onChange={(event) =>{setInputValue(event.target.value)}}/>
           <button className="bg-green-500 my-3 font-bold text-black rounded px-2" onClick={() => convertFunction()}>Convert</button>
          {result && <p className='mb-10'>Binary number to decimal result is: {result}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
