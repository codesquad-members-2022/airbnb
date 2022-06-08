import { useContext } from "react";

import { LocationContext } from "router/Contexts";

import Filter from "./AccomodationsList/Filter/Filter";
import ListItemCard from "./AccomodationsList/ListItemCard/ListItemCard";
import MapArea from "./MapArea/MapArea";
import Wrapper from "./SearchResult.style";

const SearchResult = (): JSX.Element => {
  const { queryData } = useContext(LocationContext)!;

  return (
    <Wrapper>
      {(Object.entries(queryData).length && (
        <>
          <div className="accomodations-list-area">
            <Filter />
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
      )) ||
        "올바른 경로로 접속되지 않았습니다."}
    </Wrapper>
  );
};

export default SearchResult;
