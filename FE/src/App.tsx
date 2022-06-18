import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import SearchResult from 'pages/SearchResult';
import { ModalContext } from 'components/context/ModalContext';
import { GuestModalContext } from 'components/context/GuestModalContext';
import { composeProvider } from 'utils/utils';

function App() {
  const providers = [ModalContext, GuestModalContext];
  const ContextProvider = composeProvider(providers);

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/searchResult" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
