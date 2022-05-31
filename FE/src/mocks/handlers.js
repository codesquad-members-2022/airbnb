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

export const handlers = [GET_SEARCH_BAR_DATA];
