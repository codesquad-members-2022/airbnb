import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import Header from "components/Header/Header";
import theme from "styles/theme";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
    </div>
  );
};

export default App;
