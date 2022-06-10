/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import { MapContainer } from './Maps.styled';

import { IMapsProps } from '../Maps/Maps.types';
import { Map } from '../Map/Map';

export function Maps({ lodgingData }: IMapsProps): JSX.Element {
  return (
    <MapContainer>
      <Map lodgingData={lodgingData} />
    </MapContainer>
  );
}
