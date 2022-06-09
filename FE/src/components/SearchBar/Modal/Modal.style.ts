import styled from 'styled-components';

export const PriceModal = styled.div`
  width: 493px;
  height: 364px;
  padding: 52px 64px 75px;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 16px;
`;

export const PriceRange = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-bottom: 4px;
`;

export const AverageDescription = styled.p`
  color: ${({ theme }) => theme.color.grey3};
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-bottom: 37px;
`;
