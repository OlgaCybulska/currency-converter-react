import styled from "styled-components";

export const CalculateForm = styled.form`
  max-width: 500px;
  margin: auto;
`;

export const Fieldset = styled.fieldset`
  background-color: hsl(49, 38%, 89%);
  border: 2px solid hsl(240, 70%, 50%);
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
`;

export const Legend = styled.legend`
  background-color: hsl(240, 60%, 50%);
  border: none;
  border-radius: 5px;
  padding: 15px;
  color: white;
`;

export const Input = styled.input`
  border: 2px double hsl(254, 87%, 35%);
  border-radius: 4px;
  width: 200px;
  padding: 5px;
  text-align: center;

  &:invalid {
    background-color: hsl(9, 36%, 70%);
  }
`;

export const Select = styled.select`
  border: 2px double hsl(254, 87%, 35%);
  border-radius: 4px;
  width: 200px;
  padding: 5px;
  text-align: center;
`;

export const Button = styled.button`
  width: 200px;
  background-color: hsl(240, 70%, 50%);
  color: white;
  border-radius: 4px;
  border: none;
  padding: 5px;
  margin: 15px;

  &:hover {
    background-color: hsl(240, 70%, 40%);
  }
`;

export const Important = styled.p`
  text-align: left;
  margin-left: 15px;
  margin-top: 0px;
`;

export const Loading = styled.p`
  color: teal;
`;
export const Failure = styled.p`
  color: red;
`;
