import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    padding: 0;
    color: ${({ theme }) => theme.color.black};
  }

  input {
    border: none;
    outline: none;
    background-color: transparent;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
