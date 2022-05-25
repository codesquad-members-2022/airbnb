import styled from 'styled-components';

import * as I from '@/styles/icons';
import { mixin } from '@/styles/mixin';

export interface Props {
  children?: string;
}

function SearchButton({ children }: Props) {
  return (
    <Button>
      <I.Search />
      {children && <span>{children}</span>}
    </Button>
  );
}

const Button = styled.button.attrs(() => ({ type: 'button' }))`
  ${mixin.flexbox({ jc: 'center', ai: 'center' })};
  cursor: pointer;
  padding: 8px;
  height: 40px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};
  ${mixin.defaultButtonTransition()};

  span {
    margin-left: 8px;
    margin-right: 8px;
  }
`;

export default SearchButton;
