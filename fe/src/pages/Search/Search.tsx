import React, { useEffect } from 'react';
import styled from 'styled-components';
import GNB from 'components/GNB/GNB';

const Header = styled.header`
  height: 94 px;
`;

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`;

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Search(): JSX.Element {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    // eslint-disable-next-line no-unused-vars
    const map = new kakao.maps.Map(container, options);
  }, [kakao.maps]);

  return (
    <main>
      <Header>
        <GNB />
      </Header>
      <Map id="map" />
    </main>
  );
}
