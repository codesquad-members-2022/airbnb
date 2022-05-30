// src/mocks/handlers.js

import { rest } from 'msw';

export const handlers = [
  // Handles a POST /login request

  // Handles a GET /user request
  rest.get('/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json({ msg: 'ok' }));
  }),
];
