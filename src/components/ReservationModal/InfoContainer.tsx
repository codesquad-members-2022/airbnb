import React from 'react';
import styled from 'styled-components';

const InfoContainer = ({
  title,
  content,
  width,
}: {
  title: string;
  content: string;
  width: string;
}) => (
  <ItemContainer width={width}>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </ItemContainer>
);

export default InfoContainer;

const ItemContainer = styled.div`
  width: ${({ width }) => width};
  height: 100%;
  ${({ theme }) => theme.mixin.flexMixin('column', 'flex-start', 'center')}
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 0.875rem;
  height: 20px;
  margin-left: 16px;
`;

const Content = styled.div`
  height: 20px;
  margin-left: 16px;
`;
