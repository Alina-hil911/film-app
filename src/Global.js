import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background: ${props => props.theme.bodyBackgroundColor};
  font-family: 'Roboto', sans-serif;
  }
  * {
      margin: 0;
      padding: 0;
      box-sixing: border-box;
  }
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
