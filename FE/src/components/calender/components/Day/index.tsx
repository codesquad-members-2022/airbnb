import React, { useContext } from 'react';
import * as Styled from 'components/calender/components/Day/day.style';
import { Week } from 'components/calender/constants/dateData';
import Text from 'components/calender/components/Text';
import { DateContext } from 'components/calender/context';
import { setCheckIn, setCheckOut } from 'components/calender/context/action';

interface DayProps {
  isCheckIn: boolean;
  isCheckOut: boolean;
  isIncluded: boolean;
  isDisabled: boolean;
  info: DayInfo;
}

type DayInfo = {
  year: number;
  month: number;
  week: Week;
  day: number;
};

const getTextStyle = (isCheckIn = false, isCheckOut = false, isDisabled = false) => {
  return {
    fontColor: (() => {
      if (isDisabled) return '#BDBDBD';
      if (isCheckIn || isCheckOut) return '#fff';
      return '#333';
    })(),
    fontWeight: 'bold',
  };
};

const hoverStyles = {
  background: '#333',
  color: '#fff',
};

const Day = ({
  isCheckIn = false,
  isCheckOut = false,
  isIncluded = false,
  isDisabled = false,
  info: { year, month, week, day },
}: DayProps) => {
  const { state, dispatch, setCheckedDate } = useContext(DateContext);
  const today = new Date(year, month - 1, day);
  const handleClickEvent = () => {
    if (isDisabled) return;

    if (!state.period?.checkIn || state?.period?.checkIn > today) {
      setCheckIn(dispatch, today);
      if (setCheckedDate) setCheckedDate(today);
      return;
    }

    setCheckOut(dispatch, today);
    if (setCheckedDate) setCheckedDate(undefined, today);
  };

  return (
    <Styled.TempWrapper onClick={handleClickEvent}>
      <Styled.Background isCheckIn={isCheckIn} isCheckOut={isCheckOut} isIncluded={isIncluded} week={week}>
        <Styled.SelectArea
          isCheckIn={isCheckIn}
          isCheckOut={isCheckOut}
          isDisabled={isDisabled}
          hoverStyles={hoverStyles}
        >
          <Text {...getTextStyle(isCheckIn, isCheckOut, isDisabled)}>{day}</Text>
        </Styled.SelectArea>
      </Styled.Background>
    </Styled.TempWrapper>
  );
};

export default Day;
