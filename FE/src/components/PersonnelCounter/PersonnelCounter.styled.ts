import styled from 'styled-components';
import { BtnBackgroundBorderRemove } from 'common/util.styled';

export const PersonnelCounterContainer = styled.div`
  display: flex;
  gap: 1.9rem;
  align-items: center;
`;

export const Button = styled.button`
  ${BtnBackgroundBorderRemove}
  width: 3rem;
  padding: 0;
`;

export const ButtonImg = styled.img`
  width: 3rem;
`;

export const Count = styled.em`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: ${({ theme }) => theme.lineHeights.taller};
  color: ${({ theme }) => theme.colors.grey1};
`;
