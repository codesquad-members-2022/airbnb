/* global kakao */

import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  searchInfoState,
  filteredCardsData,
} from '../../store/searchPageStore/searchPageStore';
import { boundsCoordParser } from './mapUtils';

const { kakao } = window;

const LazyMap = () => {
  const [searchInfo, setSearchInfoState] = useRecoilState(searchInfoState);
  const filteredData = useRecoilValue(filteredCardsData);
  const [map, setMap] = useState(null);
  const coordRef = useRef();
  const [markerPositions, setMarkerPositions] = useState([]);

  useEffect(() => {
    const container = document.getElementById('map');

    const center = new kakao.maps.LatLng(
      37.490839924878536,
      127.03344217026263,
    );
    const options = {
      center,
      level: 5,
    };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  useEffect(() => {
    if (!map) return;
    window.kakao.maps.event.addListener(map, 'dragend', () => {
      coordRef.current = map.getCenter();
      const newCurrentBounds = boundsCoordParser(map);
      setSearchInfoState((prev) => {
        const newState = newCurrentBounds;
        return { ...prev, ...newState };
      });
    });

    kakao.maps.event.addListener(map, 'zoom_changed', () => {
      coordRef.current = map.getCenter();
      const newCurrentBounds = boundsCoordParser(map);
      setSearchInfoState((prev) => {
        const newState = newCurrentBounds;
        return { ...prev, ...newState };
      });
    });
  }, [map]);

  useEffect(() => {
    if (!map) return;

    markerPositions.forEach(({ lat, lng }) => {
      const position = new kakao.maps.LatLng(lat, lng);
      const marker = new kakao.maps.Marker({
        position,
      });
      marker.setMap(null);
    });

    setMarkerPositions([]);
    const overlayInfos = filteredData.map(({ price, lat, lng }) => ({
      price,
      lat,
      lng,
    }));

    overlayInfos.forEach(
      ({ price, lat, lng }: { price: number; lat: number; lng: number }) => {
        const position = new kakao.maps.LatLng(lat, lng);
        setMarkerPositions((prev) => [...prev, { lat, lng }]);
        const marker = new kakao.maps.Marker({
          position,
        });

        const content = `<div class="kakao_overlay">${price}</div>`;
        new kakao.maps.CustomOverlay({
          map,
          position,
          content,
        });
        marker.setMap();
      },
    );
  }, [filteredData, searchInfo]);

  return (
    <MapContainer>
      <StyledMap id="map" style={{ width: '100%', height: '100%' }} />
    </MapContainer>
  );
};

const MapContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`;

export default LazyMap;
