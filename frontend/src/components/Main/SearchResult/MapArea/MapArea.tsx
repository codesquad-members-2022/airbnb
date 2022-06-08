import { useEffect, useRef } from "react";

const { kakao } = window;

const mapOption = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
};

const MapArea = () => {
  const $mapArea = useRef<HTMLDivElement | null>(null);
  const map = useRef(null);

  useEffect(() => {
    const mapContainer = $mapArea.current;

    map.current = new kakao.maps.Map(mapContainer, mapOption);
    // console.log(map);
  }, []);

  return <div className="map-area" ref={$mapArea} />;
};

export default MapArea;

declare global {
  interface Window {
    kakao: any;
  }
}
