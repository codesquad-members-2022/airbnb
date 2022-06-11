/* eslint-disable prefer-const */
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { Checkbox, ButtonGroup, Button } from '@mui/material';
import LoadingSpinner from 'components/Skeleton/LoadingSpinners';

import { ReactComponent as PlusIcon } from 'images/FE_숙소예약서비스/plus.svg';
import { ReactComponent as MinusIcon } from 'images/FE_숙소예약서비스/minus.svg';

import { useGetFetch } from 'hooks/useFetch';
import { toLocalString } from 'utils/helper';

declare global {
  interface Window {
    kakao: any;
  }
}

type DataTypes = {
  coordinateX: number;
  coordinateY: number;
  name: string;
  feePerOneNight: number;
};

const { kakao }: Window = window;

let kakaoMap: any;

function loadMap(data: any, ref: React.RefObject<HTMLDivElement>) {
  if (!data) return;
  const firstData = data[0];

  const mapOptions = {
    center: new kakao.maps.LatLng(firstData.coordinateX, firstData.coordinateY),
    level: 8,
  };

  const mapContainer = ref.current;
  kakaoMap = new kakao.maps.Map(mapContainer, mapOptions);

  data.forEach((loc: DataTypes) => {
    const marker = new kakao.maps.CustomOverlay({
      map: kakaoMap,
      title: loc.name,
      position: new kakao.maps.LatLng(loc.coordinateX, loc.coordinateY),
      content: `
        <div style="${customMarker}">
          ₩${toLocalString(loc.feePerOneNight)}
        </div>
      `,
    });
  });
}

function Map() {
  const location = useLocation();
  const queryString = `/accommodations${location.search}`;
  const { fetchedData, loading } = useGetFetch(queryString);

  const mapRef = useRef<HTMLDivElement>(null);

  const data: DataTypes[] | undefined = fetchedData;

  const [isDraggabled, setDraggabled] = useState<boolean>(true);

  const setDraggable = (draggable: boolean) => {
    kakaoMap.setDraggable(!draggable);
    setDraggabled(!isDraggabled);
  };

  const zoomIn = (e: MouseEvent<HTMLButtonElement> | undefined) => {
    let level = kakaoMap.getLevel();
    kakaoMap.setLevel(level - 1);
  };

  const zoomOut = (e: MouseEvent<HTMLButtonElement> | undefined) => {
    let level = kakaoMap.getLevel();
    kakaoMap.setLevel(level + 1);
  };
  useEffect(() => {
    loadMap(data, mapRef);
  }, [fetchedData]);

  return loading ? (
    <LoadingMapContainer>
      <LoadingSpinner size={200} />
    </LoadingMapContainer>
  ) : (
    <MapContainer id="mapContainer" ref={mapRef}>
      <MoveMapCheck>
        <StyledCheckbox
          defaultChecked
          sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
          onClick={() => {
            setDraggable(isDraggabled);
          }}
        />
        <span>지도를 움직이며 검색하기</span>
      </MoveMapCheck>
      <MapLevelButtons orientation="vertical" aria-label="지도 확대 축소 버튼">
        <StyledButton aria-label="지도 확대 버튼" onClick={zoomIn}>
          <PlusIcon />
        </StyledButton>
        <StyledButton aria-label="지도 축소 버튼" onClick={zoomOut}>
          <MinusIcon />
        </StyledButton>
      </MapLevelButtons>
    </MapContainer>
  );
}

const customMarker = `
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 999px;
  background: #FFFFFF;
  font-weight: 700;
  font-size: '12px';
  line-height: '17.38px';
`;

const LoadingMapContainer = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.div`
  width: 50%;
  height: 90vh;
  background: skyblue;
  position: relative;
`;

const MoveMapCheck = styled.div`
  z-index: 2;
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 212px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey1};
  ${({ theme }) => theme.fontStyles.normal14px};
`;

const StyledCheckbox = styled(Checkbox)`
  path {
    fill: ${({ theme }) => theme.colors.grey2};
  }
`;

const MapLevelButtons = styled(ButtonGroup)`
  z-index: 2;
  position: absolute;
  top: 32px;
  right: 32px;
`;

const StyledButton = styled(Button)`
  && {
    width: 20px;
    padding: 6px;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey1};
    border: 1px solid ${({ theme }) => theme.colors.grey5};

    &:hover {
      background: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.grey5};
    }
  }
`;

export default Map;
