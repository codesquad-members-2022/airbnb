import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header, { HEADER_TYPE } from '@components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header headerType={HEADER_TYPE.MAIN} />
    </BrowserRouter>
  );
}

export default App;
