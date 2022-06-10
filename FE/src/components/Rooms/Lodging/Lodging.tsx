import React from 'react';

import { LodgingElement } from '../LodgingElement';

import { ILodgingProps } from './Lodging.types';

import {
  LodgingContainer,
  LodgingSearchInfoList,
  LodgingSearchInfoItem,
  LodgingTitle,
  LodgingList,
} from './Lodging.styled';

const temp = [
  '300개 이상의 숙소',
  '5월 12일 - 5월 18일',
  '$100,000~$1,000,000',
  '게스트 3명',
];

export function Lodging({
  lodgingData,
  isFetching,
}: ILodgingProps): JSX.Element {
  if (lodgingData) {
    const lodgingSearchInfos = temp.map(text => (
      <LodgingSearchInfoItem key={text}>{text}</LodgingSearchInfoItem>
    ));

    const lodginElements = lodgingData.map(info => (
      <LodgingElement
        key={info.id}
        lodgingData={info}
        isFetching={isFetching}
      />
    ));

    return (
      <LodgingContainer>
        <LodgingSearchInfoList>{lodgingSearchInfos}</LodgingSearchInfoList>
        <LodgingTitle>지도에서 선택한 지역의 숙소</LodgingTitle>
        <LodgingList>{lodginElements}</LodgingList>
      </LodgingContainer>
    );
  }

  return (
    <LodgingContainer>
      <LodgingSearchInfoList />
      <LodgingTitle>지도에서 선택한 지역의 숙소</LodgingTitle>
      <LodgingList />
    </LodgingContainer>
  );
}
