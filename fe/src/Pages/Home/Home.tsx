import Gnb from "Components/Gnb/Gnb";
import SearchBar from "Components/SearchBar/SearchBar";
import { useRef } from "react";
import { BackgroundImg, HomeContainer, NearbyTravel, WhereverTravel } from "./Home.styled";
import CalendarModal from "./CalendarModal/CalendarModal";
import HeadCountModal from "./HeadCountModal/HeadCountModal";

export default function Home() {
  const calendarRef = useRef([]);
  const headCountRef = useRef([]);

  return (
    <>
      <BackgroundImg url={`${process.env.PUBLIC_URL}/img/banner.png`}>
        <HomeContainer width="1440px" height="640px">
          <div>
            <Gnb />
            <SearchBar calendarRef={calendarRef} headCountRef={headCountRef} />
            <CalendarModal calendarRef={calendarRef} />
            <HeadCountModal headCountRef={headCountRef} />
          </div>
        </HomeContainer>
      </BackgroundImg>
      <main>
        <NearbyTravel />
        <WhereverTravel />
      </main>
      <footer />
    </>
  );
}
