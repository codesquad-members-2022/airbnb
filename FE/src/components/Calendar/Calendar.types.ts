export interface ICalendarInfo {
  year: number;
  month: number;
}

export interface ICalendarInfos extends ICalendarInfo {
  id: number;
  date: number;
}

export interface ICalendarProps {
  calendarInfo: ICalendarInfo;
  calendarClickCount: { current: number };
}
