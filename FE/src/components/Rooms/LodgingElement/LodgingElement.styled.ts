import styled from 'styled-components';

export const LodgingElementContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  padding: 2.4rem 0;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.grey5};

  &:first-child {
    padding-top: 0;
  }
`;

export const LodgingItemImg = styled.img`
  display: block;
  object-fit: cover;
  width: 33rem;
  height: 20rem;
`;

export const LodgingDesc = styled.section`
  flex-grow: 1;
`;

export const LodgingExp = styled.em`
  display: block;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.shorter};
  color: ${({ theme: { colors } }) => colors.grey3};
`;

export const LodgingItemTitle = styled.h4`
  margin: 0.8rem 0;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.short};
  color: ${({ theme: { colors } }) => colors.grey1};
`;

export const LodgingDetailInfoList = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export const LodgingDetailInfoItem = styled.li`
  color: ${({ theme: { colors } }) => colors.grey3};
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

export const LodigingPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const DailyPrice = styled.em`
  margin-top: 8.8rem;
  display: block;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.short};
  color: ${({ theme: { colors } }) => colors.grey1};
`;

export const TotalPrice = styled.strong`
  margin-top: 0.5rem;
  display: block;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.shorter};
  color: ${({ theme: { colors } }) => colors.grey3};
  text-decoration-line: underline;
`;
