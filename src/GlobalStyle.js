import { createGlobalStyle } from "styled-components";
import background from "./money-background.png";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  background-image: url(${background});
}

*, ::after, ::before {
  box-sizing: inherit;
}

#root {

  width: 100%;
  margin: 5px auto;
  text-align: center;
  padding-bottom: 50px;
}
`;
