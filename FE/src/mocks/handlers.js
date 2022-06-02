import { rest } from 'msw';

import { BASE_URL } from '@constants';

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

const GET_PRICE_RANGE = rest.get(`${BASE_URL}/api/price-range`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      minPricePerNight: 20000,
      maxPricePerNight: 1058486,
      avgPricePerNight: 181190,
      countOfCategorizedPricePerNight: [
        {
          min: 0,
          max: 50000,
          count: 14,
        },
        {
          min: 50001,
          max: 100000,
          count: 88,
        },
        {
          min: 100001,
          max: 150000,
          count: 74,
        },
        {
          min: 150001,
          max: 200000,
          count: 36,
        },
        {
          min: 200001,
          max: 250000,
          count: 24,
        },
        {
          min: 250001,
          max: 300000,
          count: 23,
        },
        {
          min: 300001,
          max: 350000,
          count: 13,
        },
        {
          min: 350001,
          max: 400000,
          count: 5,
        },
        {
          min: 400001,
          max: 450000,
          count: 9,
        },
        {
          min: 450001,
          max: 500000,
          count: 1,
        },
        {
          min: 500001,
          max: 550000,
          count: 3,
        },
        {
          min: 550001,
          max: 600000,
          count: 0,
        },
        {
          min: 600001,
          max: 650000,
          count: 2,
        },
        {
          min: 650001,
          max: 700000,
          count: 0,
        },
        {
          min: 700001,
          max: 750000,
          count: 0,
        },
        {
          min: 750001,
          max: 800000,
          count: 2,
        },
        {
          min: 800001,
          max: 850000,
          count: 0,
        },
        {
          min: 850001,
          max: 900000,
          count: 0,
        },
        {
          min: 900001,
          max: 950000,
          count: 2,
        },
        {
          min: 950001,
          max: 1000000,
          count: 1,
        },
        {
          min: 1000001,
          max: 1050000,
          count: 0,
        },
        {
          min: 1050001,
          max: 1100000,
          count: 2,
        },
      ],
    }),
  );
});

export const handlers = [GET_SEARCH_BAR_DATA, GET_PRICE_RANGE];
