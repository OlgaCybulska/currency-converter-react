import "./App.css";
import { useState } from "react";
import { currencies } from "./currecies";
import Form from "./Form";
import Clock from "./Clock";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;
    const resultName = currencies.find(
      ({ short }) => short === currency
    ).resultName;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
      resultName,
    });
  };

  return (
    <>
      <Clock />
      <Form calculateResult={calculateResult} result={result} />
    </>
  );
}

export default App;
