import { useContext } from "react";

import NotFound from "components/NotFound/NotFound";
import RouterContext from "router/Contexts";

import Filter from "./AccomodationsList/Filter/Filter";
import ListItemCard from "./AccomodationsList/ListItemCard/ListItemCard";
import MapArea from "./MapArea/MapArea";
import Wrapper from "./SearchResult.style";

const SearchResult = (): JSX.Element => {
  // const { queryData } = useContext(LocationContext)!;
  // const { state: params } = window.history;

  const { queryData } = { ...useContext(RouterContext) };

  // console.log("확인", Object.entries(params));

  return (
    <Wrapper>
      {(queryData && (
        <>
          <div className="accomodations-list-area">
            {queryData && <Filter />}
            <h2 className="title">지도에서 선택한 지역의 숙소</h2>
            <ul className="accomodations-list">
              {[
                {
                  name: "Spacious and Comfortable cozy house #4",
                  address: "서울특별시",
                  imagePath: "https://bit.ly/39ZouHy",
                  type: "WHOLE_RESIDENCE",
                  price: 71466,
                  longitude: 127.0286,
                  latitude: 37.4953,
                  reviewScore: 4.8,
                  reviewCount: 127,
                  numberAdult: 2,
                  numberChild: 1,
                  numberInfant: 0,
                  numberBed: 1,
                  numberBathroom: 1,
                  kitchen: true,
                  hairDryer: true,
                  wirelessInternet: true,
                  airConditioner: true,
                  id: 1,
                },
                {
                  name: "Spacious and Comfortable cozy house #4",
                  address: "서울특별시",
                  imagePath: "https://bit.ly/39ZouHy",
                  type: "WHOLE_RESIDENCE",
                  price: 71466,
                  longitude: 127.0286,
                  latitude: 37.4953,
                  reviewScore: 4.8,
                  reviewCount: 127,
                  numberAdult: 2,
                  numberChild: 1,
                  numberInfant: 0,
                  numberBed: 1,
                  numberBathroom: 1,
                  kitchen: true,
                  hairDryer: true,
                  wirelessInternet: true,
                  airConditioner: true,
                  id: 2,
                },
              ].map((el) => (
                <ListItemCard {...el} />
              ))}
            </ul>
          </div>
          <MapArea />
        </>
      )) || <NotFound />}
    </Wrapper>
  );
};

export default SearchResult;
