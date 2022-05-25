import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

export interface Props {
  children?: string;
}

function ReserveButton({ children }: Props) {
  return <Button>{children && <span>{children}</span>}</Button>;
}

const Button = styled.button.attrs(() => ({ type: 'button' }))`
  cursor: pointer;
  width: 352px;
  height: 55px;
  background-color: ${({ theme }) => theme.color.gray1};
  border-radius: 10px;
  padding: 16px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  ${mixin.defaultButtonTransition()};
`;

export default ReserveButton;
