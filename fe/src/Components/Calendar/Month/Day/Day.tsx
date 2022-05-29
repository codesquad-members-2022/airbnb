import { DayArea, ActiveDay, InActiveDay, StyledCheckInOut } from "./Day.styled";
import { DateType, EventType } from "Helpers/interface";

interface CalendarTypeSkeleton {
  year: number;
  month: number;
  checkIn?: DateType;
  checkOut?: DateType;
}

interface CheckInOutType extends DateType {
  checkIn: DateType;
  checkOut: DateType;
}

interface DateCheckType extends DateType {
  checkTarget: DateType;
}
interface DayComponentType extends CalendarTypeSkeleton {
  day: number;
  today: DateType;
  handleClickDate?: (event: EventType) => void;
}

export default function Day({
  year,
  month,
  day,
  checkIn,
  checkOut,
  today,
  handleClickDate,
}: DayComponentType) {
  if (!checkIn || !checkOut) {
    return <div>{day}</div>;
  }

  if (inspectInActiveCondition({ year, month, day, checkTarget: today })) {
    return <InActiveDay>{day}</InActiveDay>;
  }

  if (inspectCheckInOutDay({ year, month, day, checkTarget: checkIn })) {
    return (
      <ActiveDay radius="30px 0 0 30px" onClick={handleClickDate}>
        <StyledCheckInOut data-year={year} data-month={month} data-day={day}>
          {day}
        </StyledCheckInOut>
      </ActiveDay>
    );
  }
  if (inspectCheckInOutDay({ year, month, day, checkTarget: checkOut })) {
    return (
      <ActiveDay radius="0 30px 30px 0" onClick={handleClickDate}>
        <StyledCheckInOut data-year={year} data-month={month} data-day={day}>
          {day}
        </StyledCheckInOut>
      </ActiveDay>
    );
  }

  if (inspectActiveCondition({ year, month, day, checkIn, checkOut })) {
    return (
      <ActiveDay data-year={year} data-month={month} data-day={day} onClick={handleClickDate}>
        {day}
      </ActiveDay>
    );
  }

  return (
    <DayArea data-year={year} data-month={month} data-day={day} onClick={handleClickDate}>
      {day}
    </DayArea>
  );
}

const inspectInActiveCondition = ({ year, month, day, checkTarget }: DateCheckType) => {
  if (year < checkTarget.year) {
    return true;
  }
  if (year === checkTarget.year && month < checkTarget.month) {
    return true;
  }
  if (year === checkTarget.year && month === checkTarget.month && day < checkTarget.day) {
    return true;
  }
  return false;
};

const inspectCheckInOutDay = ({ year, month, day, checkTarget }: DateCheckType) => {
  return year === checkTarget.year && month === checkTarget.month && day === checkTarget.day;
};

const inspectActiveCondition = ({ year, month, day, checkIn, checkOut }: CheckInOutType) => {
  const afterCheckIn =
    year > checkIn.year ||
    (year === checkIn.year && ((month === checkIn.month && day >= checkIn.day) || month > checkIn.month));
  const beforeCheckOut =
    year < checkOut.year ||
    (year === checkOut.year && ((month === checkOut.month && day <= checkOut.day) || month < checkOut.month));
  return afterCheckIn && beforeCheckOut;
};
