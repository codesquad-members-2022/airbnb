export interface ICalendarProps {
  isShowing: boolean;
  handleClickShow: () => void;
  calendarClickCount: { current: number };
}

export interface ICalendar {
  id: number;
  year: number;
  month: number;
}
