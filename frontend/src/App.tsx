import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import SearchBarContext from "contexts/SearchBar";
import Router from "router/router";
import theme from "styles/theme";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchBarContext>
          <Router />
        </SearchBarContext>
      </ThemeProvider>
    </div>
  );
};

export default App;
