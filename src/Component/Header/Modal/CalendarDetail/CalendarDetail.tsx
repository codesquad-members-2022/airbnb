import { useState } from "react";
import { StyledCalendars, CalendarsWrapper } from "./CalendarDetail.styled";
import Calendar from "./Calendar/Calendar";

type TCalendar = {
	title: "" | "prev" | "next";
	gap: number;
};

type TCalendarInfo = {
	[key in string]: TCalendar[];
};

const calendarsInfo: TCalendarInfo = {
	prev: [
		{ title: "prev", gap: 0 },
		{ title: "next", gap: 1 },
		{ title: "", gap: 2 },
		{ title: "", gap: 3 },
	],
	next: [
		{ title: "", gap: -2 },
		{ title: "", gap: -1 },
		{ title: "prev", gap: 0 },
		{ title: "next", gap: 1 },
	],
	middle: [
		{ title: "prev", gap: 0 },
		{ title: "next", gap: 1 },
		{ title: "", gap: 2 },
		{ title: "", gap: 3 },
	],
};

const NUM_DECEMBER = 12;

const getMonthAndYearByGap = (month: number, year: number, gap: number) => {
	let nextMonth = month;
	let nextYear = year;

	if (month + gap < 0) {
		nextMonth = NUM_DECEMBER + month + gap;
		nextYear -= 1;
		return { nextMonth, nextYear };
	}
	if (month + gap > NUM_DECEMBER) {
		nextMonth = month + gap - NUM_DECEMBER;
		nextYear += 1;
		return { nextMonth, nextYear };
	}

	nextMonth += gap;
	return { nextMonth, nextYear };
};

const CalendarDetail = () => {
	const currentYear = new Date().getFullYear();
	const currentMonth = new Date().getMonth();
	const [thisYear, setThisYear] = useState(currentYear);
	const [thisMonth, setThisMonth] = useState(currentMonth);
	const [sliderState, setSliderState] = useState("middle");

	const changeDates = (direction: "prev" | "next") => {
		const monthGap = direction === "prev" ? -2 : 2;
		const { nextMonth, nextYear } = getMonthAndYearByGap(thisMonth, thisYear, monthGap);
		setThisMonth(nextMonth);
		setThisYear(nextYear);
		setSliderState(direction);
	};

	const handleAnimationEnd = () => setSliderState("middle");

	const calendars = calendarsInfo[sliderState].map(({ title, gap }) => {
		const { nextMonth, nextYear } = getMonthAndYearByGap(thisMonth, thisYear, gap);

		return <Calendar title={title} year={nextYear} month={nextMonth} changeDates={changeDates} />;
	});

	return (
		<CalendarsWrapper>
			<StyledCalendars sliderState={sliderState} onAnimationEnd={handleAnimationEnd}>
				{calendars}
			</StyledCalendars>
		</CalendarsWrapper>
	);
};

export default CalendarDetail;
