import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/Container';

const CardsTitle = () => {
  return (
    <Container
      height="96px"
      width="100%"
      flexInfo={['column', 'flex-start', 'center', 'wrap']}
    >
      <Container>
        <CardText>300개 이상의 숙소</CardText>
        <CardText>5월 12일 - 5월 18일</CardText>
        <CardText>100,000 - 1,000,000</CardText>
        <CardText>게스트 3명</CardText>
      </Container>
      <CardTitle>지도에서 선택한 지역의 숙소</CardTitle>
    </Container>
  );
};

export default CardsTitle;

const CardText = styled.span`
  font-size: 12px;
  color: #333333;
  margin-right: 5px;
`;

const CardTitle = styled.h3`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
`;
