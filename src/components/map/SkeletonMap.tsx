import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { SkeletonAnimation } from '../../UI/Skeleton';

const SkeletonMap = () => <MapContainer />;

export default SkeletonMap;

const MapContainer = styled.div`
  width: 50%;
  height: 100%;
  ${SkeletonAnimation}
`;
