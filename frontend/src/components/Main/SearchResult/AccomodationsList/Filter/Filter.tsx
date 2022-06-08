import { useContext } from "react";

import { LocationContext } from "router/Contexts";

import Item from "./Item";

// count: 0, // 숙소 개수. <-- 결과에서 가져와야함. length로?

const getQueryDataFilterList = (data: { [key: string]: string }) => {
  const result = [];
  if (data.NumAdult || data.numChild) {
    const guestCount = `게스트 ${
      Number(data.numAdult) + Number(data.numChild)
    }명`;

    result.push(["guestCount", guestCount]);
  }

  if (data.checkIn) {
    let checkInOut = `${data.checkIn}~`;
    if (data.checkOut) {
      checkInOut += ` ${data.checkOut}`;
    }
    result.push(["checkInOut", checkInOut]);
  }

  if (!data.checkIn && data.checkOut) {
    const checkInOut = `${data.checkOut} 까지`;
    result.push(["checkInOut", checkInOut]);
  }

  if (data.minPrice) {
    let priceRange = `${Number(data.minPrice).toLocaleString()} ~`;
    if (data.maxPrice) {
      priceRange += ` ${Number(data.maxPrice).toLocaleString()}`;
    }
    result.push(["priceRange", priceRange]);
  }

  if (!data.minPrice && data.maxPrice) {
    const priceRange = `${Number(data.maxPrice).toLocaleString} 까지`;
    result.push(["priceRange", priceRange]);
  }

  return result;
};

const Filter = () => {
  const { queryData } = useContext(LocationContext)!;

  return (
    <Item
      // count={count} // api응답으로 온 데이터
      queryDataList={getQueryDataFilterList(queryData)}
    />
  );
};

export default Filter;
