import styled, { css } from 'styled-components';
import { BtnBackgroundBorderRemove } from 'common/util.styled';

export const UserMenu = styled.menu`
  display: flex;
  padding: 0.4rem 0.4rem 0.4rem 1.6rem;
  gap: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey4};
  border-radius: 3rem;
`;

export const MenuBtn = styled.button<{ num: number }>`
  ${BtnBackgroundBorderRemove}

  ${({ num }) =>
    num === 2 &&
    css`
      background-color ${({ theme }) => theme.colors.grey3};
      border-radius: 3rem;
    `}
`;
