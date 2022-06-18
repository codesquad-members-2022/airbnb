/* eslint-disable no-return-assign */
/* eslint-disable react/no-this-in-sfc */
import React, { useContext, useEffect, useState, useRef } from 'react';

import { Context } from 'components/context/ModalContext';
import { moneyToWon } from 'utils/utils';
import { GuestContext } from 'components/context/GuestModalContext';
import roomListApis from 'apis/roomListApi';
import CheckIcon from 'components/Icons/CheckIcon';
import * as Styled from './Map.style';

type GoogleGeoCodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

declare let google: any;

declare global {
  interface Window {
    initMap: () => void;
  }
}

function Map() {
  const {
    isReSearch,
    setIsResearch,
    filteredData,
    highPrice = 0,
    lowPrice = 0,
    infantCounts,
    guestCounts,
    setFilteredData,
  } = useContext(Context);
  const mapRef = useRef<HTMLDivElement>(null);
  const [centerCoors, setCenterCoors] = useState({ lat: 34.397, lng: 140.644 });
  const [zoomLvl, setZoomLvl] = useState(4);
  const { adultCount, childrenCount } = useContext(GuestContext);
  const onClickReSearch = () => {
    if (isReSearch === 0) {
      setIsResearch((prev) => prev + 1);
    } else {
      setIsResearch((prev) => prev - 1);
    }
  };
  useEffect(() => {
    function initMap(): void {
      const map = new google.maps.Map(mapRef.current, {
        center: centerCoors,
        zoom: zoomLvl,
      });
      const markers: any[] = [];
      map.addListener('zoom_changed', (e) => {
        setZoomLvl(map.getZoom());

        if (isReSearch === 0) {
          const filteredDatas = {
            checkInDate: '2022-06-23',
            checkOutDate: '2022-06-30',
            minRoomCharge: lowPrice,
            maxRoomCharge: highPrice,
            numOfGuests: guestCounts,
            numOfAdults: adultCount,
            numOfChildren: childrenCount,
            numOfInfants: infantCounts,
            westLatitude: map.getBounds().Ua.h,
            northLongitude: map.getBounds().Ab.j,
            eastLatitude: map.getBounds().Ua.j,
            southLongitude: map.getBounds().Ab.h,
            page: 1,
          };

          const fetchRoomList = async () => {
            const roomList = await roomListApis.getFilteredRooms({ filteredDatas });
            setFilteredData(roomList);
          };
          fetchRoomList();
        }
      });
      map.addListener('dragend', (e) => {
        if (isReSearch === 0) {
          const filteredDatas = {
            checkInDate: '2022-06-23',
            checkOutDate: '2022-06-30',
            minRoomCharge: lowPrice,
            maxRoomCharge: highPrice,
            numOfGuests: guestCounts,
            numOfAdults: adultCount,
            numOfChildren: childrenCount,
            numOfInfants: infantCounts,
            westLatitude: map.getBounds().Ua.h,
            northLongitude: map.getBounds().Ab.j,
            eastLatitude: map.getBounds().Ua.j,
            southLongitude: map.getBounds().Ab.h,
            page: 1,
          };
          const centerCoor = {
            lat:
              map.getBounds().Ab.h + map.getBounds().Ab.j === 0 ? 1 : (map.getBounds().Ab.h + map.getBounds().Ab.j) / 2,
            lng:
              map.getBounds().Ua.h + map.getBounds().Ua.j === 0 ? 1 : (map.getBounds().Ua.h + map.getBounds().Ua.j) / 2,
          };
          setCenterCoors(centerCoor);

          const fetchRoomList = async () => {
            const roomList = await roomListApis.getFilteredRooms({ filteredDatas });
            setFilteredData(roomList);
          };
          fetchRoomList();
        }
      });
      filteredData.forEach((coordinates) => {
        const marker = new google.maps.Marker({
          position: { lat: coordinates.longitude, lng: coordinates.latitude },
          map,
          icon: {
            path: 'M-40 -20 H 48 L 49 -19 L 50 -18 V 18 L 49 19 L 48 20 H -38 L -39 19 L -40 18 L -40 -18 L -39 -19 z',
            fillColor: 'white',
            anchor: new google.maps.Point(0, 0),
            strokeWeight: 1,
            fillOpacity: 1.0,
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          label: {
            color: '#333333',
            fontWeight: '600',
            fontSize: '15px',
            text: `${moneyToWon(coordinates.allAmount)}`,
            backgroundColor: 'white',
          },
        });
        markers.push(marker);
      });

      const bounds = new google.maps.LatLngBounds();

      for (let i = 0; i < markers.length; i += 1) {
        bounds.extend(markers[i].getPosition());
      }
    }
    window.initMap = initMap;
    initMap();
  }, [filteredData, isReSearch, centerCoors]);

  return (
    <Styled.MapWrapper>
      <Styled.SearchMap ref={mapRef} />
      <Styled.ControlDiv onClick={onClickReSearch}>
        <Styled.ControlUI>
          <Styled.ControlText>재검색하기</Styled.ControlText>
          <Styled.CheckWrapper>
            <CheckIcon color={isReSearch === 0 ? 'black' : 'lightgrey'} />
          </Styled.CheckWrapper>
        </Styled.ControlUI>
      </Styled.ControlDiv>
    </Styled.MapWrapper>
  );
}

export default Map;
