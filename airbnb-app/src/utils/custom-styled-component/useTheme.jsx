import { useContext } from 'react';
import { ThemeContext } from './CustomThemeProvider';

const useTheme = () => useContext(ThemeContext);

export { useTheme };