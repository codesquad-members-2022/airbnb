type dayType = { year: number; month: number; date: number };

const UNIT = "￦";
const PRICE_UNIT = 50000;
const DISTANCE_MIN_MAX = PRICE_UNIT * 2;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;

const getPriceType = (price: number | undefined, isUnit = false) => {
	const unit = isUnit ? UNIT : "";
	const stringifiedPrice = price ? price.toLocaleString("ko-KR") : 0;
	return unit + stringifiedPrice;
};

const getLateDay = (originDay: dayType, comparedDay: dayType) => {
	if (originDay.year > comparedDay.year) return originDay;
	if (originDay.year < comparedDay.year) return comparedDay;
	if (originDay.month > comparedDay.month) return originDay;
	if (originDay.month < comparedDay.month) return comparedDay;
	if (originDay.date > comparedDay.date) return originDay;
	if (originDay.date < comparedDay.date) return comparedDay;
	return {};
};

const getShowedMonth = (month: number) => (month >= 12 ? 1 : month + 1);

const getDateType = ({ year, month, date }: dayType) => new Date(year, month, date);

const getDateDiff = (firstDay: dayType, secondDay: dayType) => {
	const firstDate = getDateType(firstDay);
	const secondDate = getDateType(secondDay);

	const differentDate = firstDate.getTime() - secondDate.getTime();

	return Math.abs(differentDate / (1000 * 3600 * 24));
};

export {
	PRICE_UNIT,
	DISTANCE_MIN_MAX,
	MAX_PRICE,
	MIN_PRICE,
	getPriceType,
	getLateDay,
	getShowedMonth,
	getDateDiff,
};
export type { dayType };
