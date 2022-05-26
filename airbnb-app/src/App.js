import { CustomThemeProvider } from './custom-styled-component/CustomThemeProvider';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './common/globalStyle';
import theme from './common/theme';
import GNB from './component/gnb/GNB';
import SearchBar from './component/search-bar/SearchBar';
import MainBanner from './component/main-banner/MainBanner';

function App() {
  return (
    <CustomThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GNB />
        <MainBanner />
        <SearchBar />
      </ThemeProvider>
    </CustomThemeProvider>
  );
}

export default App;
