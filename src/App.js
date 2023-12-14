import { GlobalStyle } from "./GlobalStyle";
import Form from "./Form";
import Clock from "./Clock";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    breakpoints: {
      mobile: 767,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Clock />
      <Form />
    </ThemeProvider>
  );
}

export default App;
