import { CustomThemeProvider } from '@/utils/custom-styled-component/CustomThemeProvider';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/common/globalStyle';
import theme from '@/common/theme';
import MainBanner from '@component/main-banner/MainBanner';
import Header from '@/component/header/Header';

function App() {
  return (
    <CustomThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <MainBanner />
      </ThemeProvider>
    </CustomThemeProvider>
  );
}

export default App;
