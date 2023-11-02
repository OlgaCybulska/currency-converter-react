import "./style.css";
import { useState } from "react";
import { currencies } from "../currecies";

const Form = ( {calculateResult, result }) => {
  
  const [amount, setAmount] = useState("");
  const [currency, setCurrecy] = useState(currencies[0].short);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fildset">
        <legend className="form__legend">Kalkulator walut </legend>
        <p>Wpisz kwotę w złotych, którą chcesz wymienić:</p>
        <div>
          <label>
            <input
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
          <label>
            <select
              className="form__field"
              value={currency}
              onChange={({ target }) => setCurrecy(target.value)}
            >
              {currencies.map((currency) => (
                <option 
                key={currency.short} 
                value={currency.short}
                >
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p>
          <strong>Przelicz:</strong>
        </p>
        <button className="form__button">
          [PLN] na [EUR]:
        </button>
      </fieldset>
      <p className="form__text--important">*pole wymagane</p>
     <div> {amount} {currency} {}</div>
    </form>
  );
};

export default Form;
