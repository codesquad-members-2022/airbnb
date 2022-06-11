import { useContext } from "react";

import { Box } from "@mui/material";

import NotFound from "components/NotFound/NotFound";
import RouterContext from "router/Contexts";

import Filter from "./AccomodationsList/Filter/Filter";
import ListItemCard from "./AccomodationsList/ListItemCard/ListItemCard";
import MapArea from "./MapArea/MapArea";
import Wrapper from "./SearchResult.style";

const requiredQueryKeys = [
  "checkIn",
  "checkOut",
  "maxPrice",
  "minPrice",
  "numAdult",
  "numChild",
  "numInfant",
];

const SearchResult = (): JSX.Element => {
  const { queryData } = { ...useContext(RouterContext) };

  const isQueryDataIncludesKey = (keyName: string) => {
    return queryData?.[keyName];
  };

  const isQueryDataIncludesRequiredQueryKeys = requiredQueryKeys.some(
    isQueryDataIncludesKey
  );

  return (
    <Box component="main">
      <Wrapper maxWidth="xl">
        {(isQueryDataIncludesRequiredQueryKeys && (
          <>
            <div className="accomodations-list-area">
              <Filter />
              <h2 className="title">지도에서 선택한 지역의 숙소</h2>
              <ul className="accomodations-list">
                {
                  // 임시 데이터
                  [
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
                  ].map(({ id, ...props }) => (
                    <ListItemCard key={id} {...props} />
                  ))
                }
              </ul>
            </div>
            <MapArea />
          </>
        )) || <NotFound />}
      </Wrapper>
    </Box>
  );
};

export default SearchResult;
