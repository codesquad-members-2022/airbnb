import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Noto Sans KR', sans-serif;
    color: #010101;
  }

  #modal {
    position: absolute;
    top: 0;
    left: 0;
  }

  input[type=range] {
    -webkit-appearance: none;
    background-color: transparent;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    
  a {
    text-decoration: none;
    color: #010101;
  }
`;

export default GlobalStyle;
