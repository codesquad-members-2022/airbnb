import { ThemeProvider } from '@mui/material/styles';
import { Home } from '@/Pages/Home';
import { SearchingProvider } from '@/Contexts/Searching';
import { theme, GlobalStyle } from '@/styles';

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
