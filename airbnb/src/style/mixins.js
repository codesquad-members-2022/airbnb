import { css } from 'styled-components';

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export { flexCenter, flexBetween, flexColumn };
