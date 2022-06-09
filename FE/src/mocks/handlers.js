import { rest } from 'msw';

import { API, BASE_URL } from '@constants';
import { rangeData } from '@data';

// 삭제 예정
const GET_SEARCH_BAR_DATA = rest.get(`${BASE_URL}/api/search-bar`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      period: {
        checkIn: '5월 27일',
        checkOut: '5월 28일',
      },
      price: {
        min: 100000,
        max: 1000000,
      },
      personnel: {
        guest: 0,
        kid: 0,
      },
    }),
  );
});

const GET_PRICE_RANGE = rest.get(`${BASE_URL}${API.PRICE_INFO}`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      minPricePerNight: 20000,
      maxPricePerNight: 1058486,
      avgPricePerNight: 181190,
      countOfCategorizedPricePerNight: rangeData,
    }),
  );
});

export const handlers = [GET_SEARCH_BAR_DATA, GET_PRICE_RANGE];
