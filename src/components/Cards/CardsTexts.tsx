import React from 'react';
import styled, { css } from 'styled-components';
import Container from '../../UI/Container';

const CardTexts = ({ name, price }: { name: string; price: number }) => {
  return (
    <Container width="400px" height="200px">
      <CardInfoUpside>
        <CardText>{name}</CardText>
        <HashTags>해쉬태그</HashTags>
        <CardText>최대인원 3명 원룸 침대1개 욕실 1개</CardText>
        <br />
        <CardText>주방 무선 인터넷 에어컨 헤어드라이어</CardText>
      </CardInfoUpside>
      <CardInfoDownSide>
        <Text size="14" weight="700">
          {price}
        </Text>
        <Text size="12"> / 박</Text>
        <br />
        <TotalAmount>총액</TotalAmount>
      </CardInfoDownSide>
    </Container>
  );
};

export default CardTexts;

const CardInfoUpside = styled.div`
  height: 85%;
  width: 268px;
  margin-top: 5px;
`;

const CardInfoDownSide = styled.div`
  width: 100%;
  text-align: end;
`;

const HashTags = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 10px 0;
`;

const TotalAmount = styled.span`
  font-size: 12px;
  color: #828282;
  border-bottom: 1px solid #828282;
`;

const CardText = styled.span`
  font-size: 12px;
  color: #333333;
  margin-right: 5px;
`;

const Text = styled.span<{ size?: string; weight?: string; color?: string }>`
  ${({ size, weight, color }) => css`
    font-size: ${size}px;
    font-weight: ${weight};
    color: ${color};
  `}
`;
