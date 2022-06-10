import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      xs: '1.2rem';
      sm: '1.4rem';
      md: '1.6rem';
      lg: '1.8rem';
      xl: '2rem';
      xxl: '2.4rem';
      xxxl: '3.2rem';
    };

    fontWeights: {
      normal: '400';
      bold: '700';
      black: '900';
    };

    lineHeights: {
      shorter: '1.7rem';
      short: '2rem';
      base: '2.3rem';
      tall: '2.6rem';
      taller: '2.9rem';
      long: '3.5rem';
      logo: '4.6rem';
    };

    letterSpacings: {
      tighter: '-0.04rem';
    };

    colors: {
      secondary: '#118917';
      primary: '#E84C60';
      black: '#010101';
      grey1: '#333333';
      grey2: '#4F4F4F';
      grey3: '#828282';
      grey4: '#BDBDBD';
      grey5: '#E0E0E0';
      grey6: '#F5F5F7';
      white: '#FFFFFF';
    };

    borderSizes: {
      small: '0.19rem';
      medium: '0.3rem';
    };

    margins: {
      medium: '1.6rem';
      large: '2.4rem';
      xLarge: '6rem';
    };

    paddings: {
      medium: '1.6rem';
      large: '2.4rem';
    };
  }
}
