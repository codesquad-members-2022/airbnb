import 'styled-components';

import { FontSize, Color } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    fontSize: FontSize;
  }
}
