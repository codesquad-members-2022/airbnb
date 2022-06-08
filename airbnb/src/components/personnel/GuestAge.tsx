import React from 'react';
import styled from 'styled-components';
import { GuestAgeProps } from './personnelType';

function GuestAge({ title, desc }: GuestAgeProps) {
  return (
    <AgeBox>
      <AgeCategory>{title}</AgeCategory>
      <AgeDescription>{desc}</AgeDescription>
    </AgeBox>
  );
}

const AgeBox = styled.div``;
const AgeCategory = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const AgeDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray3};
`;

export default GuestAge;
