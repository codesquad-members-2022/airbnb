import styled from 'styled-components';

export const Title = styled.div`
  margin-bottom: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.color.black};
`;
