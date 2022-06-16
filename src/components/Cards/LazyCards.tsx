import React from 'react';
import { useRecoilValue } from 'recoil';
import Card, { CardDataType } from './Card';
import { filteredCardsData } from '../../store/searchPageStore/searchPageStore';

const LazyCards = () => {
  const filteredData = useRecoilValue(filteredCardsData);
  return filteredData.map((card: CardDataType, i: number) => (
    <Card
      key={card.roomId}
      accommInfo={{
        ...card,
        imgSrc: `https://loremflickr.com/300/200/cats?${i}`,
      }}
    />
  ));
};

export default LazyCards;
