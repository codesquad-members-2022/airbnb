import { useState } from "react";

import { Grid } from "@mui/material";

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
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);
  const [price, setPrice] = useState({
    min: initialPrice.minPrice,
    max: initialPrice.maxPrice,
  });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <SelectItemAreaWrapper container columns={12}>
      <CheckInOut
        setAnchorEl={setAnchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
      />
      <ReservationFee
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClick}
        stateData={{ state: price, setState: setPrice }}
        initialPrice={initialPrice}
      />
      <PeopleCount
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={handleClick}
      />
      <Grid item xs={1} sx={searchButtonWrapperStyle}>
        <Link to="searchResult" onClick={handleClose}>
          <ButtonArea
            icon="search"
            isFocused={Boolean(anchorEl)}
            ariaLabel="설정한 정보로 검색하기"
          />
        </Link>
      </Grid>
    </SelectItemAreaWrapper>
  );
};

export default SelectItemArea;
