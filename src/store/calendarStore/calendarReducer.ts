import {
  DateType,
  CalendarStateType,
  CalendarActionType,
} from './calendarType';

const initialCalendarState: CalendarStateType = {
  checkIn: null,
  checkOut: null,
  hoveredDate: null,
};

const CHECK_IN = 'calendar/CHECK_IN';
const CHECK_OUT = 'calendar/CHECK_OUT';
const HOVER = 'calendar/HOVER';
const DELETE = 'calendar/DELETE';

const checkInActionCreator = (checkInDate: DateType) => ({
  type: CHECK_IN,
  payload: checkInDate,
});

const checkOutActionCreator = (checkOutDate: DateType) => ({
  type: CHECK_OUT,
  payload: checkOutDate,
});

const hoverActionCreator = (hoveredDate: DateType) => ({
  type: HOVER,
  payload: hoveredDate,
});

const deleteActionCreator = () => ({ type: DELETE });

const calendarReducer = (state = initialCalendarState, action: CalendarActionType) => {
  const { type, payload } = action;
  switch (type) {
    case CHECK_IN: {
      return {
        ...state,
        checkIn: payload,
      };
    }

    case CHECK_OUT: {
      return {
        ...state,
        checkOut: payload,
      };
    }

    case HOVER: {
      return { ...state, hoveredDate: payload };
    }

    case DELETE: {
      return initialCalendarState;
    }

    default: {
      return state;
    }
  }
};

export const calendarActions = {
  checkInActionCreator,
  checkOutActionCreator,
  hoverActionCreator,
  deleteActionCreator,
};

export default calendarReducer;
