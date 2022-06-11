import { coords } from '@/mocks/coord';
import { useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import { PriceMarker } from './PriceMarker';

declare global {
  interface Window {
    naver: any;
  }
}
interface NaverMapProps {
  width: string;
  height: string;
}

function showMarker(map: any, marker: any) {
  if (marker.setMap()) return;
  marker.setMap(map);
}

function hideMarker(marker: any) {
  if (!marker.setMap()) return;
  marker.setMap(null);
}

function updateMarkers(map: any, markers: any[]) {
  const mapBounds = map.getBounds();

  markers.forEach(marker => {
    const position = marker.getPosition();

    if (mapBounds.hasLatLng(position)) {
      showMarker(map, marker);
    } else {
      hideMarker(marker);
    }
  });
}

function makePriceMarker(
  maps: any,
  {
    latitude,
    longitude,
    title,
    price,
  }: {
    latitude: number;
    longitude: number;
    title: string;
    price: number;
  },
) {
  return new maps.Marker({
    position: new maps.LatLng(latitude, longitude),
    map: null,
    title,
    icon: {
      content: renderToString(<PriceMarker price={price} />),
      size: new maps.Size(1, 1),
      anchor: new maps.Point(19, 58),
    },
  });
}

export function NaverMap({ width, height }: NaverMapProps) {
  useEffect(() => {
    const { naver } = window;
    console.log(naver);
    const mapOptions = {
      center: new naver.maps.LatLng(37.491, 127.0339),
      zoom: 17,
    };
    const baseMap = new naver.maps.Map('map', mapOptions);
    const markers = coords.map(coord => makePriceMarker(naver.maps, coord));

    naver.maps.Event.addListener(baseMap, 'zoom_changed', function () {
      updateMarkers(baseMap, markers);
    });

    naver.maps.Event.addListener(baseMap, 'dragend', function () {
      updateMarkers(baseMap, markers);
    });

    updateMarkers(baseMap, markers);
  }, []);
  return (
    <div>
      <div id="map" style={{ width, height }} />
    </div>
  );
}
