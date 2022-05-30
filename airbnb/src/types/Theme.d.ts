// 도대체 얘가 있으면 왜 되는건지 물어봐야함 이건 진짜 학회 논의 감

// TODO: 발표때 모듈 타입 확장 시킨 과정 발표할것
import {
  PaletteColor,
  PaletteColorOptions,
} from '@mui/material/styles/createPalette';

// 변경 white: pallete['primary'] -> PaletteColor 타입으로 좀더  명시적으로 찾아서 지정
declare module '@mui/material/styles' {
  interface Palette {
    White: PaletteColor;
    Grey1: PaletteColor;
    Grey2: PaletteColor;
    Grey3: PaletteColor;
    Grey4: PaletteColor;
    Grey5: PaletteColor;
    Grey6: PaletteColor;
    Black: PaletteColor;
    Primary: PaletteColor;
    Secondary: PaletteColor;
  }

  interface PaletteOptions {
    White: PaletteColorOptions;
    Grey1: PaletteColorOptions;
    Grey2: PaletteColorOptions;
    Grey3: PaletteColorOptions;
    Grey4: PaletteColorOptions;
    Grey5: PaletteColorOptions;
    Grey6: PaletteColorOptions;
    Black: PaletteColorOptions;
    Primary: PaletteColorOptions;
    Secondary: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    White: true;
    Grey1: true;
    Grey2: true;
    Grey3: true;
    Grey4: true;
    Grey5: true;
    Grey6: true;
    Black: true;
    Primary: true;
    Secondary: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    White: true;
    Grey1: true;
    Grey2: true;
    Grey3: true;
    Grey4: true;
    Grey5: true;
    Grey6: true;
    Black: true;
    Primary: true;
    Secondary: true;
  }
}
