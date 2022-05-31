import { useContext } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { Link, RouterContext } from "router/router";
import theme from "styles/theme";

const App = (): JSX.Element => {
  const { page } = useContext(RouterContext);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {page}
        <Link to="searchResult">hi</Link>
      </ThemeProvider>
    </div>
  );
};

export default App;
