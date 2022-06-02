import { createContext } from 'react';

const ThemeContext = createContext();

function CustomThemeProvider({ children, theme }) {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, CustomThemeProvider };
