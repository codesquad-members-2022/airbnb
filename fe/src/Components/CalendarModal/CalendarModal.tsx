import { MONTH_DICTIONARY } from "Helpers/constant";
import Calendar from "./Calendar/Calendar";
import { CalenderContainer } from "./CalendarModal.styled";

interface calenderType {
  year: number;
  month: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

export default function CalenderModal({ year, month, width, height, backgroundColor }: calenderType) {
  const checkIn = { year: 2022, month: 5, day: 26 };
  const checkOut = { year: 2022, month: 6, day: 4 };

  const thisMonthNumber = MONTH_DICTIONARY.indexOf(month);
  const nextMonthNumber = thisMonthNumber === 12 ? 1 : thisMonthNumber + 1;
  const nextMonthYear = nextMonthNumber === 1 ? year + 1 : year;

  return (
    <CalenderContainer
      flex={true}
      justify="space-between"
      width={width}
      height={height}
      backgroundColor={backgroundColor}
    >
      <Calendar year={year} month={thisMonthNumber} checkIn={checkIn} checkOut={checkOut} />
      <Calendar year={nextMonthYear} month={nextMonthNumber} checkIn={checkIn} checkOut={checkOut} />
    </CalenderContainer>
  );
}
