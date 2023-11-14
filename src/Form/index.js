import "./style.css";
import { useState, useRef } from "react";
import { currencies } from "../currecies";
import Result from "./Result";

const Form = ({ calculateResult, result }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrecy] = useState(currencies[0].short);
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <fieldset className="form__fildset">
          <legend className="form__legend">Kalkulator walut </legend>
          <p>Wpisz kwotę w złotych, którą chcesz wymienić:</p>
          <div>
            <label>
              <input
                ref={inputRef}
                className="form__field"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                required
                type="number"
                min="1"
                step="0.01"
              />
            </label>
          </div>
          <div>
            <p>Wybierz walutę, na którą chcesz wymienić:</p>
            <label>
              <select
                className="form__field"
                value={currency}
                onChange={({ target }) => setCurrecy(target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.short} value={currency.short}>
                    {currency.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <button className="form__button" onClick={focusInput}>
            Przelicz:
          </button>
        </fieldset>
        <p className="form__text--important">*pole wymagane</p>
      </form>

      <Result result={result} />
    </>
  );
};

export default Form;
