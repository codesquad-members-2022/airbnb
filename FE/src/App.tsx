import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Footer from '@components/Footer';
import GNB, { GNB_TYPE } from '@components/GNB';
import Header from '@components/Header';
import MainContent from '@components/MainContent';

function App() {
  return (
    <BrowserRouter>
      <GNB gnbType={GNB_TYPE.MAIN} />
      <Header />
      <MainContent />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
