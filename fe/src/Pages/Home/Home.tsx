import Gnb from "Components/Gnb/Gnb";
import SearchView from "Pages/Common/SearchView";
import {
  BackgroundImg,
  calendarStyle,
  headCountStyle,
  HomeContainer,
  NearbyTravel,
  searchBarStyle,
  WhereverTravel,
} from "./Home.styled";

export default function Home() {
  return (
    <>
      <BackgroundImg url={`${process.env.PUBLIC_URL}/img/banner.png`}>
        <HomeContainer width="1440px" height="640px">
          <div>
            <Gnb />
            <SearchView
              searchBarStyle={searchBarStyle}
              headCountStyle={headCountStyle}
              calendarStyle={calendarStyle}
            />
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
