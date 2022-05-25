import Gnb from "Components/Gnb/Gnb";
import SearchBar from "Components/SearchBar/SearchBar";
import React from "react";
import { BackgroundImg, HomeContainer } from "./Home.styled";

interface BoxProps {
  children: React.ReactNode; // 👈️ type children
}

export default function Home() {
  return (
    <>
      <BackgroundImg url="/img/banner.png">
        <HomeContainer width="1440px" height="640px">
          <Header>
            <Gnb />
            <SearchBar />
          </Header>
        </HomeContainer>
      </BackgroundImg>
      <Main>
        <NearbyTravel />
        <WhereverTravel />
      </Main>
      <Footer />
    </>
  );
}

function Header(props: BoxProps) {
  const { children } = props;
  return <>{children}</>;
}
function Main(props: BoxProps) {
  const { children } = props;
  return <>{children}</>;
}
function NearbyTravel() {
  return <></>;
}
function Footer() {
  return <></>;
}

function WhereverTravel() {
  return <></>;
}
