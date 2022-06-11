import { useContext } from "react";

import { Box } from "@mui/material";

import { PriceRangeContext } from "contexts/contexts";
import { numToWon } from "utils/utils";

import PriceChart from "./PriceChart";
import RangeSlider from "./RangeSlider";
import { Wrapper } from "./ReservationFeeModal.style";

// TODO: 임시데이터 변경
const average1DayPrice = 165556;

const PriceSelectArea = () => {
  const {
    priceRange: { price },
  } = useContext(PriceRangeContext)!;

  return (
    <Wrapper>
      <h2>가격 범위</h2>
      <p className="price-range">
        ₩{numToWon(price.min)} - ₩{numToWon(price.max)}
      </p>
      <p className="price-average">
        평균 1박 요금은 ₩{numToWon(average1DayPrice)}입니다.
      </p>
      <Box>
        <PriceChart />
        <RangeSlider />
      </Box>
    </Wrapper>
  );
};

export default PriceSelectArea;
