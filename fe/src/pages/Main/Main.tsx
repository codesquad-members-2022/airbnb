import React from 'react';
import styled from 'styled-components';
import GNB from 'components/GNB/GNB';
import SearchBar from 'components/SearchBar/SearchBar';
import backGroundImg from 'img/png/hero-img.png';

const Header = styled.header`
  height: 640px;
  background-image: url(${backGroundImg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export default function Main(): JSX.Element {
  return (
    <main>
      <Header>
        <GNB />
        <SearchBar />
      </Header>
    </main>
  );
}
