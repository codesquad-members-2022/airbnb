import { ThemeProvider } from '@mui/material/styles';
import { Router, Routes, Route, Link } from 'geon-react-router';
import { Home, Search } from '@/Pages';
import { theme, GlobalStyle } from '@/styles';
import { ModalProvider } from '@/Contexts/Modal';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </ModalProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
