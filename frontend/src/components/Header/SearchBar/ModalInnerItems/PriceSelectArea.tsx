import { useContext } from "react";

import { Box } from "@mui/material";

import numToWon from "utils/utils";

import { PriceSelectContext } from "../Context/SearchBarContexts";
import PriceChart from "./PriceChart";

// TODO: 임시데이터 변경
const average1DayPrice = 165556;

const PriceSelectArea = () => {
  const {
    accomodationPrice: { minPrice, maxPrice },
  } = useContext(PriceSelectContext);

  return (
    <Box component="section">
      <h2>가격 범위</h2>
      <p>
        ₩{numToWon(minPrice)} - ₩{numToWon(maxPrice)}+
      </p>
      <p>평균 1박 요금은 ₩{numToWon(average1DayPrice)}입니다.</p>
      <Box>
        <PriceChart />
      </Box>
    </Box>
  );
};

export default PriceSelectArea;
