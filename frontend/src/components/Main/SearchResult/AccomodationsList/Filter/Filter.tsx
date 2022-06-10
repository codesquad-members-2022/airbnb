import { useContext } from "react";

import RouterContext from "router/Contexts";
import { getFormattedDate, numToWon } from "utils/utils";

import Item from "./Item";

// TODO: API사용시 API로부터 받아온 min, maxPrice로 변경
const initialPrice = {
  minPrice: 10000,
  maxPrice: 10000000,
};

// NOTE: count: 0, // 숙소 개수. <-- 결과에서 가져와야함. length로?

const getDataListFromQueryData = (data: { [key: string]: string }) => {
  const result = [];

  if (data.NumAdult || data.numChild) {
    const guestCount = `게스트 ${
      Number(data.numAdult) + Number(data.numChild)
    }명`;

    result.push(["guestCount", guestCount]);
  }

  if (data.checkIn || data.checkOut) {
    const checkInStr =
      (!!data?.checkIn && `${getFormattedDate(data.checkIn)}`) || "";
    const checkOutStr =
      (!!data?.checkOut && `${getFormattedDate(data.checkOut)}`) || "";
    result.push(["checkInOut", `${checkInStr} ~ ${checkOutStr}`]);
  }

  if (data.minPrice || data.maxPrice) {
    result.push([
      "priceRange",
      `₩${
        numToWon(Number(data?.minPrice)) || initialPrice.minPrice
      } - ₩${numToWon(Number(data?.maxPrice) || initialPrice.maxPrice)}`,
    ]);
  }
  return result;
};

const Filter = () => {
  const { queryData } = { ...useContext(RouterContext) };

  return (
    queryData && (
      <Item
        // count={count} // NOTE: api응답으로 온 데이터
        queryDataList={getDataListFromQueryData(queryData)}
      />
    )
  );
};

export default Filter;
