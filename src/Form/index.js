import { useState, useRef } from "react";
import { currencies } from "../currecies";
import Result from "./Result";
import {
  CalculateForm,
  Fieldset,
  Legend,
  Input,
  Select,
  Button,
  Important,
} from "./styled";

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
      <CalculateForm onSubmit={onFormSubmit}>
        <Fieldset>
          <Legend>Kalkulator walut </Legend>
          <p>Wpisz kwotę w złotych, którą chcesz wymienić:</p>
          <div>
            <label>
              <Input
                ref={inputRef}
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
              <Select
                value={currency}
                onChange={({ target }) => setCurrecy(target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.short} value={currency.short}>
                    {currency.name}
                  </option>
                ))}
              </Select>
            </label>
          </div>
          <Button onClick={focusInput}>Przelicz:</Button>
        </Fieldset>
        <Important>*pole wymagane</Important>
      </CalculateForm>

      <Result result={result} />
    </>
  );
};

export default Form;
