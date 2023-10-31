import "./style.css";
import { useState } from "react";
import Currencies from "../Currencies";

const Form = ( rate, name, countResult ) => {
  const [amount, setAmount] = useState(1);
  const [Currecy, setCurrecy ] = useState(Currencies[0].name);

  const onFormSubmit = (event) => {
    event.preventDefault();
    countResult(amount, rate);
    setAmount(1);
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
              autoFocus
            />
          </label>
        </div>
        <div>
          <label>
            <select
              className="form__field"
              value={name}
              onChange={({ target }) => setCurrecy(target.name)}
            >
              <option> Euro </option>
              <option> Dolar Amerykański </option>
              <option> Funt Brytyjski </option>
              <option> Frank Szwajcarski </option>
            </select>
          </label>
        </div>
        <p>
          <strong>Przelicz:</strong>
        </p>
        <button className="form__button" onClick={countResult}>
          [PLN] na [EUR]:
        </button>
      </fieldset>
      <p className="form__text--important">*pole wymagane</p>
      <p>
        Po wymianie <strong>{amount}</strong> zł otrzymasz{" "}
        <strong>{}</strong> <strong>{}</strong>
      </p>
    </form>
  );
};

export default Form;
