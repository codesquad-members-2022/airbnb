import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { v4 as uuid } from 'uuid';
import Container from '../../UI/Container';
import { SkeletonAnimation } from '../../UI/Skeleton';

const SkeletonCard = () => (
  <SkeletonCardContainer>
    <SkeletonCardImage />
    <Container width="400px" height="200px">
      <SkeletonCardInfoUpside>
        <SkeletonCardText />
        <SkeletonHashTags />
        <SkeletonCardText />
        <SkeletonCardText />
      </SkeletonCardInfoUpside>
      <SkeletonCardInfoDownSide>
        <SkeletonCardText />
        <SkeletonTotalAmount />
      </SkeletonCardInfoDownSide>
    </Container>
  </SkeletonCardContainer>
);

const SkeletonCards = () =>
  Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={uuid()} />);

export default SkeletonCards;

const SkeletonCardInfoUpside = styled.div`
  height: 85%;
  width: 268px;
  margin-top: 5px;
`;

const SkeletonCardInfoDownSide = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('column', 'end', 'flex-start')}
  width: 100%;
`;

const SkeletonHashTags = styled.div`
  width: 100%;
  height: 14px;
  margin: 10px 0;
  ${SkeletonAnimation}
`;

const SkeletonTotalAmount = styled.div`
  width: 30%;
  height: 10px;
  ${SkeletonAnimation}
`;

const SkeletonCardText = styled.div`
  width: 50%;
  height: 12px;
  margin-bottom: 3px;
  ${SkeletonAnimation}
`;

const SkeletonCardContainer = styled.div`
  position: relative;
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'center')}
  padding: 20px 0;
  width: 100%;
  height: 30%;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
`;

const SkeletonCardImage = styled.img`
  width: 330px;
  height: 200px;
  border-radius: 10px;
  margin-right: 10px;
  ${SkeletonAnimation}
`;
