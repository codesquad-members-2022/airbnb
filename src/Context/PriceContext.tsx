import { createContext, ReactNode, useReducer, useEffect, Dispatch } from "react";
import pricesApi from "Api/pricesApi";
import { MAX_PRICE, MIN_PRICE } from "util/util";

type pricesType = {
	[key in number]: number;
};

type priceType = {
	min: number;
	max: number;
	avg: number;
	prices: pricesType; // {50000:3, 150000:5, 350000:10}
};

type priceDispatchValueType = {
	min?: number;
	max?: number;
	avg?: number;
	prices?: pricesType;
};

type priceDispatchAction = {
	value: priceDispatchValueType;
	type: "EDIT" | "RESET";
};

type priceDispatchType = Dispatch<priceDispatchAction>;

const priceDefault = { min: MIN_PRICE, max: MAX_PRICE, avg: 0, prices: {} };
const PriceContext = createContext<priceType>(priceDefault);
const PriceDispatchContext = createContext<priceDispatchType>(() => null);

const getPricesAvg = (pricesObj: pricesType, min: number, max: number) => {
	let priceSum = 0;
	let count = 0;
	const prices = Object.keys(pricesObj);

	prices.forEach((price) => {
		const targetPrice = Number(price);
		const targetCount = pricesObj[targetPrice];

		if (targetPrice > min && targetPrice <= max) {
			priceSum += targetPrice * targetCount;
			count += targetCount;
		}
	});

	const avg = Math.round(priceSum / count / 100) * 100;
	return avg;
};

const priceReducer = (price: priceType, action: priceDispatchAction) => {
	const { value, type } = action;

	switch (type) {
		case "EDIT": {
			const newPrice = { ...price, ...value };
			const { min, max, prices } = newPrice;
			const avg = getPricesAvg(prices, min, max);
			newPrice.avg = avg;

			return newPrice;
		}
		case "RESET": {
			return priceDefault;
		}
		default: {
			return { ...price };
		}
	}
};

const PriceProvider = ({ children }: { children: ReactNode }) => {
	const [price, priceDispatch] = useReducer(priceReducer, priceDefault);

	const fetchPrices = async () => {
		const hotelsPrices = await pricesApi.getPrices();
		const { avg, prices } = hotelsPrices;
		priceDefault.avg = avg;
		priceDefault.prices = prices;
		priceDispatch({ value: { ...hotelsPrices }, type: "RESET" });
	};

	useEffect(() => {
		fetchPrices();
	}, []);

	return (
		<PriceContext.Provider value={price}>
			<PriceDispatchContext.Provider value={priceDispatch}>
				{children}
			</PriceDispatchContext.Provider>
		</PriceContext.Provider>
	);
};

export { PriceContext, PriceDispatchContext, PriceProvider };
