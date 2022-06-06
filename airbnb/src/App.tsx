import { ThemeProvider } from '@mui/material/styles';
import { Home } from '@/Pages/Home';
import { theme, GlobalStyle } from '@/styles';
import { ModalProvider } from '@/Contexts/Modal';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <Home />
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
