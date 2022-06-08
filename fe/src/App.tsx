import React from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Routers from 'components/Routers/Routers';
import { SearchProvider } from 'context/SearchProvider';
import { ModalProvider } from 'context/ModalProvider';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
      box-sizing:border-box;
    }
`;

export default function App(): JSX.Element {
  return (
    <div className="App">
      <GlobalStyles />
      <ModalProvider>
        <SearchProvider>
          <Routers />
        </SearchProvider>
      </ModalProvider>
    </div>
  );
}
