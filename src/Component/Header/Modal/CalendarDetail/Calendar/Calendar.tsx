import { PrevButton, NextButton } from "util/Icons";
import { StyledCalendar } from "./Calendar.styled";
import CalendarTitle from "./CalendarTitle";
import CalendarDayBox from "./CalendarDayBox";

const Calendar = ({
	title,
	year,
	month,
	changeDates,
}: {
	title: string;
	year: number;
	month: number;
	changeDates: (direction: "prev" | "next") => void;
}) => {
	return (
		<StyledCalendar>
			{title === "prev" && (
				<PrevButton onClick={() => changeDates(title)} colorset="black" size={16} />
			)}
			<CalendarTitle year={year} month={month} />
			{title === "next" && (
				<NextButton onClick={() => changeDates(title)} colorset="black" size={16} />
			)}
			<CalendarDayBox year={year} month={month} />
		</StyledCalendar>
	);
};

export default Calendar;
