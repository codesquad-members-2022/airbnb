import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

const AppContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AppContainer>
        <RecoilRoot>
          <Router>
            <Routes>
              <Route path="/">
                <Route index element={<MainPage />} />
                <Route path="search" element={<SearchPage />} />
              </Route>
            </Routes>
          </Router>
        </RecoilRoot>
      </AppContainer>
    </ThemeProvider>
  </>
);

export default App;
