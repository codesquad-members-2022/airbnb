import { useEffect, useRef, useState } from "react";
import { KakaoMap, overlayStyle } from "./Map.styled";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;

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

  const testOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
  });
  testOverlay.setMap(mapState);

  useEffect(initMap, []);

  return <KakaoMap ref={mapRef}></KakaoMap>;
}
