import { CalendarDispatchContext } from 'contexts/CalendarProvider';
import { useContext } from 'react';
import { changeLocalDateStr, compareDate } from 'utility/dateUtil';
import { useInputState } from './useInputState';

export function useInputDispatch() {
  const dispatch = useContext(CalendarDispatchContext);
  const { checkIn } = useInputState();

  function handelClickEvent(
    year: number,
    month: number,
    date: number | string,
  ) {
    const selectedDate = changeLocalDateStr(year, month - 1, date);
    if (dispatch) {
      if (!checkIn || compareDate(checkIn, selectedDate)) {
        dispatch({
          type: 'INPUT_CHECK_IN',
          date: selectedDate,
        });
      } else {
        dispatch({
          type: 'INPUT_CHECK_OUT',
          date: selectedDate,
        });
      }
    }
  }

  function handelResetEvent() {
    if (dispatch) {
      dispatch({
        type: 'RESET_INPUT',
      });
    }
  }
  return { handelClickEvent, handelResetEvent };
}
