/* eslint-disable no-plusplus */
/* global kakao */
import { CatchingPokemonSharp } from '@mui/icons-material';
import React, { useEffect } from 'react';

import { IMapProps } from './Map.types';

const { kakao } = window as any;
let map: any;
let geocoder: any;

export function Map({ lodgingData }: IMapProps): JSX.Element {
  if (lodgingData) {
    useEffect(() => {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      map = new kakao.maps.Map(container, options);
      geocoder = new kakao.maps.services.Geocoder();

      geocoder.addressSearch(
        '서울특별시 강남구 강남대로62길 23(역삼동)',
        (result: any, status: any) => {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new kakao.maps.Marker({
              map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">코드스쿼드</div>',
            });
            infowindow.open(map, marker);

            const lodgingShrinkingData = lodgingData.map(data => {
              return {
                title: data.title,
                latlng: new kakao.maps.LatLng(data.y, data.x),
                price: data.price,
              };
            });

            const imageSrc =
              'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

            for (let i = 0; i < lodgingShrinkingData.length; i++) {
              // 마커 이미지의 이미지 크기 입니다
              const imageSize = new kakao.maps.Size(24, 35);

              // 마커 이미지를 생성합니다
              const markerImage = new kakao.maps.MarkerImage(
                imageSrc,
                imageSize,
              );

              // 마커를 생성합니다
              const marker = new kakao.maps.Marker({
                map,
                position: lodgingShrinkingData[i].latlng, // 마커를 표시할 위치
                title: lodgingShrinkingData[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage, // 마커 이미지
              });

              const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">₩${lodgingShrinkingData[i].price}</div>`,
              });

              infowindow.open(map, marker);
              // marker.setMap(map);
            }

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        },
      );
    }, []);

    const zoomIn = (map: any) => {
      map.setLevel(map.getLevel() - 1);
    };

    const zoomOut = (map: any) => {
      map.setLevel(map.getLevel() + 1);
    };

    const getInfo = () => {
      // 지도의 현재 중심좌표를 얻어옵니다
      const center = map.getCenter();
      // 지도의 현재 레벨을 얻어옵니다
      const level = map.getLevel();
      // 지도타입을 얻어옵니다
      const mapTypeId = map.getMapTypeId();
      // 지도의 현재 영역을 얻어옵니다
      const bounds = map.getBounds();
      // 영역의 남서쪽 좌표를 얻어옵니다
      const swLatLng = bounds.getSouthWest();
      // 영역의 북동쪽 좌표를 얻어옵니다
      const neLatLng = bounds.getNorthEast();
      // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
      const boundsStr = bounds.toString();

      let message = `지도 중심좌표는 위도 ${center.getLat()},`;
      message += `경도 ${center.getLng()} 이고`;
      message += `지도 레벨은 ${level} 입니다`;
      message += `지도 타입은 ${mapTypeId} 이고 `;
      message += `지도의 남서쪽 좌표는 ${swLatLng.getLat()}, ${swLatLng.getLng()} 이고`;
      message += `북동쪽 좌표는 ${neLatLng.getLat()}, ${neLatLng.getLng()} 입니다`;

      console.log(message);
    };

    // 주소로 좌표를 검색합니다

    return (
      <>
        <div
          id="map"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <button
          type="button"
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}
          onClick={() => {
            zoomIn(map);
          }}
        >
          +
        </button>
        <button
          type="button"
          style={{ position: 'absolute', top: 0, left: 25, zIndex: 10 }}
          onClick={() => {
            zoomOut(map);
          }}
        >
          -
        </button>
        <button
          type="button"
          style={{ position: 'absolute', top: 0, left: 50, zIndex: 10 }}
          onClick={() => {
            getInfo();
          }}
        >
          좌표 정보
        </button>
      </>
    );
  }

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}
