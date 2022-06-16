import React from 'react';
import styled from 'styled-components';

const PricePerDay = ({ priceData }: { priceData: number }) => (
  <>
    <PriceString>{`₩${priceData.toLocaleString()}`}</PriceString>
    <PerDayString>/박</PerDayString>
  </>
);

export default PricePerDay;

const PriceString = styled.span`
  font-weight: 700;
  font-size: 1.25rem;
`;

const PerDayString = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.lightGrey};
`;
