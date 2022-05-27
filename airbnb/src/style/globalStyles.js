import { createGlobalStyle } from 'styled-components';
import reset from 'reset-css';

const GlobalStyle = createGlobalStyle`
    ${reset}; 
    body{
      width: 1600px;
      margin: 0 auto;
    }
    button{
      background: none;
      cursor: pointer;
      margin: 0 auto;
      border: none;
    }
    span{
      display: block;
    }
`;

export default GlobalStyle;
