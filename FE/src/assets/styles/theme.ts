import { DefaultTheme } from 'styled-components';

const color = {
  black: '#010101',
  grey1: '#333333',
  grey2: '#4F4F4F',
  grey3: '#828282',
  grey4: '#BDBDBD',
  grey5: '#E0E0E0',
  grey6: '#f5f5f7',
  white: '#fff',
  primary: '#E84C60',
  secondary: '#118917',
};

const fontSize = {
  display: '2rem',
  xLarge: '1.5rem',
  large: '1.25rem',
  medium: '1rem',
  small: '0.875rem',
  xSmall: '0.75rem',
};

const fontWeight = {
  heavy: '900',
  bold: '700',
  regular: '400',
};

export type ColorTypes = typeof color;
export type FontSizeTypes = typeof fontSize;
export type FontWeightTypes = typeof fontWeight;

export const theme: DefaultTheme = {
  color,
  fontSize,
  fontWeight,
};
