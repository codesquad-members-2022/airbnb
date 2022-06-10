import styled from 'styled-components';

import { ModalStyle } from 'common/util.styled';

export const Modal = styled.div`
  ${ModalStyle}
  padding: 6.4rem;
  top: 21rem;
  left: 50%;
  transform: translateX(-50%);
  width: 40rem;
  height: 35.5rem;
`;

export const PersonnelList = styled.ul``;

export const PersonnelItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border: none;
  }
`;

export const Personnel = styled.section``;

export const PersonnelTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.base};
`;

export const PersonnelAge = styled.strong`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.short};
  color: ${({ theme }) => theme.colors.grey3};
`;
