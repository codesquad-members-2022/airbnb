import styled from 'styled-components';
import { FlexCenterSort } from 'common/util.styled';

export const CarouselItem = styled.article`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CalendarTitle = styled.h3`
  margin-bottom: 2.4rem;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
`;

export const CalendarContent = styled.div``;

export const Week = styled.ul`
  display: flex;
  margin-bottom: 0.4rem;
`;

export const WeekCell = styled.li`
  ${FlexCenterSort}
  width: 4.8rem;
  height: 2.4rem;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.shorter};
  color: ${({ theme: { colors } }) => colors.grey3};
`;

export const DatesContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 33.6rem;
  height: 33.6rem;
`;
