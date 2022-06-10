import { createKey } from "Helpers/utils";
import { useEffect, useRef, useState } from "react";
import { KakaoMap, overlayStyle } from "./Map.styled";

declare global {
  interface Window {
    kakao: any;
  }
}

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const { kakao } = window;

const positions = new Array(10).fill(1).map((_, idx) => {
  const lat = getRandomNumber(37.48, 37.495);
  const lng = getRandomNumber(127.03, 127.04);
  const key = createKey("" + lat * lng, idx);
  const template = `${idx + 1}번째 아파트`;
  return {
    content: `<div key=${key} style="${overlayStyle}">${template}</div>`,
    position: new kakao.maps.LatLng(lat, lng),
  };
});

export default function Map() {
  const [mapState, setMapState] = useState(null);
  const mapRef = useRef(null);

  const initMap = () => {
    const center = new kakao.maps.LatLng(37.490821, 127.033417);
    const options = {
      center,
      level: 3,
    };
    const map = new kakao.maps.Map(mapRef.current, options);
    setMapState(map);
  };

  const position = new kakao.maps.LatLng(37.490821, 127.033417);
  const content = `<div style="${overlayStyle}">코드스쿼드</div>`;

  const drawOverlay = () => {
    positions.forEach((position, idx) => {
      const overlay = new kakao.maps.CustomOverlay(position);
      overlay.setMap(mapState);
    });
  };

  const startOverlay = new kakao.maps.CustomOverlay({
    position,
    content,
  });

  startOverlay.setMap(mapState);

  useEffect(initMap, []);
  useEffect(drawOverlay, [mapState]);

  return <KakaoMap ref={mapRef}></KakaoMap>;
}
