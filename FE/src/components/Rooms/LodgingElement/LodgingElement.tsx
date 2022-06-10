import React from 'react';

import { ILodgingElementProps } from 'components/Rooms/LodgingElement/LodgingElement.types';

import {
  LodgingElementContainer,
  LodgingItemImg,
  LodgingDesc,
  LodgingExp,
  LodgingItemTitle,
  LodgingDetailInfoList,
  LodgingDetailInfoItem,
  LodigingPrice,
  DailyPrice,
  TotalPrice,
} from 'components/Rooms/LodgingElement/LodgingElement.styled';
import { Skeleton } from '@mui/material';

export function LodgingElement({
  lodgingData,
  isFetching,
}: ILodgingElementProps): JSX.Element {
  if (!isFetching) {
    return (
      <LodgingElementContainer>
        <Skeleton variant="rectangular">
          <LodgingItemImg src={lodgingData.imageUrl} />
        </Skeleton>
        <LodgingDesc>
          <Skeleton variant="text" width={266} height={17}>
            <LodgingExp />
          </Skeleton>
          <Skeleton variant="text" width={266} height={20}>
            <LodgingItemTitle />
          </Skeleton>
          <Skeleton variant="text" width={266} height={34}>
            <LodgingDetailInfoList />
            <LodgingDetailInfoList />
          </Skeleton>
          <LodigingPrice>
            <Skeleton
              variant="text"
              width={78}
              height={20}
              sx={{ marginTop: 11 }}
            >
              <DailyPrice />
            </Skeleton>
            <Skeleton
              variant="text"
              width={85}
              height={17}
              sx={{ marginTop: 1 }}
            >
              <TotalPrice />
            </Skeleton>
          </LodigingPrice>
        </LodgingDesc>
      </LodgingElementContainer>
    );
  }

  return (
    <LodgingElementContainer>
      <LodgingItemImg src={lodgingData.imageUrl} />
      <LodgingDesc>
        <LodgingExp>{lodgingData.address}</LodgingExp>
        <LodgingItemTitle>{lodgingData.title}</LodgingItemTitle>
        {/* <LodgingDetailInfoList>{firstLodging}</LodgingDetailInfoList>
        <LodgingDetailInfoList>{secondLodging}</LodgingDetailInfoList> */}
        <LodigingPrice>
          <DailyPrice>₩{lodgingData.price.toLocaleString()} / 박</DailyPrice>
          <TotalPrice>총액 ₩{lodgingData.price.toLocaleString()}</TotalPrice>
        </LodigingPrice>
      </LodgingDesc>
    </LodgingElementContainer>
  );
}
