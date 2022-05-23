import { rest } from 'msw';

const TEST = rest.get(`/test`, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(5000),
    ctx.json({
      test: 'test',
    }),
  );
});

export const handlers = [TEST];
