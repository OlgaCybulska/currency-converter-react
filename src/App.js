import "./App.css";
import { useState } from "react";
import Form from "./Form";
import Currencies from "./Currencies";


function App() {
  const [result, setResult] = useState(0);

  const countResult = ( amount, rate ) => {
    return setResult = amount / rate;
    
  };

  let wynik = setResult.value;

  return (
    <Form countResult={countResult} result={result} setResult={setResult} wynik={wynik}/>
  );
}

export default App;
