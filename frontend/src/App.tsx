import { useContext } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import RouterContext from "router/Contexts";
import { pages } from "router/pages";
import theme from "styles/theme";

const App = (): JSX.Element => {
  const { page } = useContext(RouterContext);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {pages[page]}
      </ThemeProvider>
    </div>
  );
};

export default App;
