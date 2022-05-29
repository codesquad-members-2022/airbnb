import Calendar from "Components/Calendar/Calendar";
import Gnb from "Components/Gnb/Gnb";
import SearchBar from "Components/SearchBar/SearchBar";
import { getTodayDate } from "Helpers/utils";
import { useCalendar } from "Hook/useCalendar";
import { useState } from "react";
import { BackgroundImg, HomeContainer, NearbyTravel, WhereverTravel } from "./Home.styled";
import { DateType, EventType } from "Helpers/interface";

interface compareCheckInType extends DateType {
  checkIn: DateType;
}

interface dispatchType extends DateType {
  type: string;
}

const { year: initYear, month: initMonth } = getTodayDate();

export default function Home() {
  const calendarModalStyle = `
    background-color:#fff;
    width: 916px;
    margin-left: 262px;
    margin-top: 40px;
    padding: 88px;
    border-radius: 40px;
  `;

  const [calendarState, dispatchCalendar] = useCalendar();
  const { checkIn, checkOut } = calendarState;
  const [calendarData, setCalendarData] = useState({ year: initYear, month: initMonth });
  const calendarShowCount = 2;

  const runDispatchCalendar = ({ year, month, day, type }: dispatchType) => {
    dispatchCalendar({
      type: `${type}`,
      year: Number(year),
      month: Number(month),
      day: Number(day),
    });
  };

  const handlePrevButton = () => {
    const newCalendarData = { year: calendarData.year, month: 0 };
    newCalendarData.month = calendarData.month - calendarShowCount;
    if (newCalendarData.month < 0) {
      newCalendarData.month = 12 - -newCalendarData.month;
      newCalendarData.year--;
    }
    setCalendarData(newCalendarData);
  };

  const handleNextButton = () => {
    const newCalendarData = { year: calendarData.year, month: 0 };
    newCalendarData.month = calendarData.month + calendarShowCount;
    if (newCalendarData.month > 12) {
      newCalendarData.month -= 12;
      newCalendarData.year++;
    }
    setCalendarData(newCalendarData);
  };

  const handleClickDate = ({ target }: EventType) => {
    const { year, month, day } = target.dataset;

    if (checkIn.day === 0) {
      runDispatchCalendar({ type: "SET_CHECK_IN", year, month, day });
      return;
    }

    if (isFasterThanCheckIn({ year, month, day, checkIn })) {
      runDispatchCalendar({ type: "SET_CHECK_IN", year, month, day });
      return;
    }

    runDispatchCalendar({ type: "SET_CHECK_OUT", year, month, day });
  };

  const { isOpen } = calendarState;

  return (
    <>
      <BackgroundImg url="/img/banner.png">
        <HomeContainer width="1440px" height="640px">
          <div>
            <Gnb />
            <SearchBar />
            {isOpen && (
              <Calendar
                calendarShowCount={calendarShowCount}
                columnCount={2}
                calendarModalStyle={calendarModalStyle}
                checkIn={checkIn}
                checkOut={checkOut}
                calendarData={calendarData}
                handlePrevButton={handlePrevButton}
                handleNextButton={handleNextButton}
                handleClickDate={handleClickDate}
              />
            )}
          </div>
        </HomeContainer>
      </BackgroundImg>
      <main>
        <NearbyTravel />
        <WhereverTravel />
      </main>
      <footer />
    </>
  );
}

const isFasterThanCheckIn = ({ year, day, month, checkIn }: compareCheckInType) => {
  [year, day, month] = [year, day, month].map(Number);
  if (year < checkIn.year) {
    return true;
  }
  if (year === checkIn.year && month < checkIn.month) {
    return true;
  }
  if (year === checkIn.year && month === checkIn.month && day < checkIn.day) {
    return true;
  }
  return false;
};
