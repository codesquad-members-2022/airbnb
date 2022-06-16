import React from 'react';
import styled from 'styled-components';
import Container from '@UI/Container';

const FeeInfo = ({ label, fee }: { label: string; fee: number }) => (
  <FeeInfoBox>
    <Label>{label}</Label>
    <span>{`₩${Math.floor(fee).toLocaleString()}`}</span>
  </FeeInfoBox>
);

export default FeeInfo;

const FeeInfoBox = styled.div`
  width: 100%;
  height: 23px;
  margin-bottom: 8px;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-between')}
`;

const Label = styled.div`
  text-decoration-line: underline;
`;
