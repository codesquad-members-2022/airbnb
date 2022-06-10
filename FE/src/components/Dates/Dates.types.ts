export interface ICalendarInfo {
  id: number;
  year: number;
  month: number;
  date: number;
}

export interface IDateInfo {
  dateInfo: ICalendarInfo;
  calendarClickCount: { current: number };
}
