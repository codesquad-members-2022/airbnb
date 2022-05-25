import { ThemeProvider } from '@mui/material/styles';
import { Home } from './Pages/Home';
import { theme, GlobalStyle } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
