import "./App.css";
import { useState } from "react";
import { currencies } from "./currecies";
import Form from "./Form";
import Result from "./Result";


function App() {
  
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {

    const rate = currencies.find(({ short }) => short === currency).rate

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate ,
      currency,
    });
  };

  return (
    <>
      <Form calculateResult={calculateResult} result={result} />
      <Result />
      
    </>
  );
}

export default App;
