import { css } from 'styled-components';

const calendarModalStyle = css`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  width: 880px;
  height: 470px;
  top: 190px;
  z-index: 100;
`;

export { calendarModalStyle };
