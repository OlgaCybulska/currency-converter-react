import { useState, useRef } from "react";
import Result from "./Result";
import { useRatesData } from "./useRatesData";
import {
  CalculateForm,
  Fieldset,
  Legend,
  Input,
  Select,
  Button,
  Important,
  Loading,
  Failure,
} from "./styled";

const Form = () => {
  const ratesData = useRatesData();
  const inputRef = useRef(null);
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();

  const onInputChange = ({ target }) => setAmount(target.value);
  const onSelectFromChange = ({ target }) => setCurrency(target.value);

  const calculateResult = (amount, currency) => {
    const rate = ratesData?.data?.[currency].value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };
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
        {ratesData.state === "loading" ? (
          <Loading> Ładujemy aktualne kursy walut 😉 </Loading>
        ) : ratesData.state === "error" ? (
          <Failure>Ups... Coś poszło nie tak... Odswież stronę </Failure>
        ) : (
          <>
            <Fieldset>
              <Legend>Kalkulator walut </Legend>
              <p>Wpisz kwotę w złotych, którą chcesz wymienić:</p>
              <div>
                <label>
                  <Input
                    ref={inputRef}
                    value={amount}
                    onChange={onInputChange}
                    required
                    id="amount"
                    type="number"
                    min="1"
                    step="0.01"
                  />
                </label>
              </div>
              <div>
                <p>Wybierz walutę, na którą chcesz wymienić:</p>
                <label>
                  <Select value={currency} onChange={onSelectFromChange}>
                    {Object.keys(ratesData.data).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </Select>
                </label>
              </div>
              <Button onClick={focusInput}>Przelicz:</Button>
            </Fieldset>
            <Important>*pole wymagane</Important>
          </>
        )}
      </CalculateForm>

      <Result result={result} />
    </>
  );
};

export default Form;
