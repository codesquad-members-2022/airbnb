import { BASIC_MONTH_INFO } from 'constant';
import { ICalendar } from 'components/CalendarModal/CalendarModal.types';

const cur: Date = new Date(Date.now());

export const initialCalendarState: ICalendar[] = [
  {
    id: 1,
    year: cur.getFullYear(),
    month: cur.getMonth() + BASIC_MONTH_INFO.thisMonth,
  },
  {
    id: 2,
    year: cur.getFullYear(),
    month: cur.getMonth() + BASIC_MONTH_INFO.nextMonth,
  },
];

function updateCalendarState(state: ICalendar[]): ICalendar[] {
  const copy = JSON.parse(JSON.stringify(state));
  const recentDate = copy[copy.length - 1];
  const DECEMBER = 12;

  if (recentDate.month === DECEMBER) {
    const newObj = {
      id: recentDate.id + 1,
      year: recentDate.year + 1,
      month: 1,
    };
    return [...copy, newObj];
  }

  const newObj = {
    id: recentDate.id + 1,
    year: recentDate.year,
    month: recentDate.month + 1,
  };

  return [...copy, newObj];
}

export function calendarReducer(
  state: ICalendar[],
  action: { type: string },
): ICalendar[] {
  switch (action.type) {
    case 'ADD_CALENDAR':
      return updateCalendarState(state);
    default:
      return state;
  }
}
