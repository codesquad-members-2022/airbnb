import { rest } from "msw";
import airbnb from "img/airbnb.png";
import a from "img/a.jpg";
import b from "img/b.jpg";
import c from "img/c.jpg";
import d from "img/d.jpg";
import e from "img/e.jpg";
import f from "img/f.jpg";
import g from "img/g.jpg";
import hotelsData from "./data";
import getHotelsPrices from "./controllers";

const images = { a, b, c, d, e, f, g, airbnb };

const handlers = [
	rest.get(`/api/prices`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(100), ctx.json(getHotelsPrices(hotelsData)));
	}),
	rest.get(`/api/hotels`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.delay(100), ctx.json(hotelsData));
	}),
	rest.get(`/api/img`, (req, res, ctx) => {
		const imgName = req.url.searchParams.get("name");
		return res(ctx.status(200), ctx.delay(100), ctx.json(images[imgName]));
	}),
];

export default handlers;
