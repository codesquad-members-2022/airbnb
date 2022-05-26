import CalendarModal from "Components/CalendarModal/CalendarModal";
import Gnb from "Components/Gnb/Gnb";
import SearchBar from "Components/SearchBar/SearchBar";
import React from "react";
import { BackgroundImg, HomeContainer } from "./Home.styled";

interface BoxProps {
  children: React.ReactNode; // 👈️ type children
}

const getThisMonthDate = () => {
  const date = new Date();
  const [, month, , year] = String(date).split(" ");
  return { year, month };
};

export default function Home() {
  const { year, month } = getThisMonthDate();

  return (
    <>
      <BackgroundImg url="/img/banner.png">
        <HomeContainer width="1440px" height="640px">
          <Header>
            <Gnb />
            <SearchBar />
            <CalendarModal year={Number(year)} month={month} width="916px" backgroundColor="#fff" />
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
