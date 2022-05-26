import { ThemeProvider } from '@mui/material/styles';
import { Home } from './Pages/Home';
import { theme, GlobalStyle } from './styles';
import { SearchingProvider } from './Context/Searching';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SearchingProvider>
          <Home />
        </SearchingProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
