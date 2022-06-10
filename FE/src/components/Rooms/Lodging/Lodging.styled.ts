import styled from 'styled-components';

export const LodgingContainer = styled.section`
  padding: 3.2rem 2.4rem;
  width: 50%;
  overflow: auto;
`;

export const LodgingSearchInfoList = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export const LodgingSearchInfoItem = styled.li`
  color: ${({ theme: { colors } }) => colors.grey1};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.shorter};

  &::after {
    content: '∙';
  }

  &:last-child::after {
    content: '';
  }
`;

export const LodgingTitle = styled.h3`
  margin-top: 0.8rem;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.long};
`;

export const LodgingList = styled.ul`
  margin-top: 3.2rem;
  width: 100%;
  height: 100%;
`;
