import React, { Dispatch } from 'react';
import SearchBarSection from '../../UI/SearchBarSection';
import {
  useCalendarStateContext,
  useCalendarDispatchContext,
} from '../../store/calendarStore/CalendarContext';
import { calendarActions } from '../../store/calendarStore/calendarReducer';
import Container from '../../UI/Container';
import { ModalType } from '../../types/types';
import { getMonthDateString } from '../../util/calenderUtil';

const Period = ({
  setOpenedModal,
}: {
  setOpenedModal: Dispatch<React.SetStateAction<ModalType>>;
}) => {
  const calendarState = useCalendarStateContext();
  const dispatchCalendar = useCalendarDispatchContext();
  const { deleteActionCreator } = calendarActions;
  const checkInDateString = calendarState.checkIn
    ? getMonthDateString(calendarState.checkIn)
    : null;
  const checkOutDateString = calendarState.checkOut
    ? getMonthDateString(calendarState.checkOut)
    : null;

  return (
    <Container onClick={() => setOpenedModal('CALENDAR')}>
      <SearchBarSection
        searchBarSectionInfo={[
          {
            name: '체크인',
            placeholder: '날짜 입력',
            value: checkInDateString,
          },
          {
            name: '체크아웃',
            placeholder: '날짜 입력',
            value: checkOutDateString,
          },
        ]}
        isLast={false}
        initSection={() => dispatchCalendar(deleteActionCreator())}
      />
    </Container>
  );
};
export default Period;
