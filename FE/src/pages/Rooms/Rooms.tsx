import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Lodging } from 'components/Rooms/Lodging';

import { Maps } from 'components/Rooms/Maps';

import { IRoomsOutletContext } from './Rooms.types';

import { RoomsContainer } from './Rooms.styled';

export function Rooms(): JSX.Element {
  const { setIsSearchShowing } = useOutletContext<IRoomsOutletContext>();
  const [lodgingData, setLodgingData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        'http://airbnb-alb-ap-northeast-2-668068179.ap-northeast-2.elb.amazonaws.com/api/accommodations?startDate=2022-06-01&endDate=2022-06-03&visitors=3',
      ).then(res => res.json());
      setIsFetching(true);
      setLodgingData(data);
    })();
    setIsSearchShowing(true);

    return () => {
      setIsSearchShowing(false);
    };
  }, []);

  if (lodgingData) {
    return (
      <RoomsContainer>
        <Lodging lodgingData={lodgingData} isFetching={isFetching} />
        <Maps lodgingData={lodgingData} />
      </RoomsContainer>
    );
  }

  return (
    <RoomsContainer>
      <Lodging isFetching={isFetching} />
    </RoomsContainer>
  );
}
