import { useContext, useState } from "react";

import { Grid } from "@mui/material";

import { SearchBarStateContext } from "contexts/contexts";
import RouterContext from "router/Contexts";
import Link from "router/Link";

import ButtonArea from "./ButtonArea/ButtonArea";
import { CheckInOut, ReservationFee, PeopleCount } from "./SelectItem";
import { AnchorEl } from "./SelectItem/SelectItem";
import {
  SelectItemAreaWrapper,
  searchButtonWrapperStyle,
} from "./SelectItemArea.style";

// TODO:
// 스크린리더가 읽을 수 있도록 - tab으로 탐색가능하도록

// TODO: API사용시 API로부터 받아온 min, maxPrice로 변경
const initialPrice = {
  minPrice: 10000,
  maxPrice: 10000000,
};

const SelectItemArea = (): JSX.Element => {
  const { isSearchBarFullSize, setIsSearchBarFullSize } = useContext(
    SearchBarStateContext
  )!;
  const { page } = { ...useContext(RouterContext) };

  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);
  const [price, setPrice] = useState({
    min: initialPrice.minPrice,
    max: initialPrice.maxPrice,
  });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const setAnchorNullEl = () => {
    setAnchorEl(null);
  };

  const handleFullSizeSearchBarClick = () => {
    setIsSearchBarFullSize(false);
  };

  const handleMiniSearchBarClick = () => {
    setIsSearchBarFullSize(true);
  };

  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOut
        setAnchorEl={setAnchorEl}
        anchorEl={anchorEl}
        onClose={setAnchorNullEl}
      />
      <ReservationFee
        anchorEl={anchorEl}
        onClose={setAnchorNullEl}
        onClick={handleClick}
        stateData={{ state: price, setState: setPrice }}
        initialPrice={initialPrice}
      />
      <PeopleCount
        anchorEl={anchorEl}
        onClose={setAnchorNullEl}
        onClick={handleClick}
      />
      <Grid item xs={1} sx={searchButtonWrapperStyle}>
        <Link
          to="searchResult"
          onClick={
            isSearchBarFullSize || page === "index"
              ? handleFullSizeSearchBarClick
              : handleMiniSearchBarClick
          }
          query={{
            test: "test1", // 쿼리 테스트용
          }}
        >
          <ButtonArea
            icon="search"
            isFocused={isSearchBarFullSize && Boolean(anchorEl)}
            ariaLabel="설정한 정보로 검색하기"
            xs={12}
          />
        </Link>
      </Grid>
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
