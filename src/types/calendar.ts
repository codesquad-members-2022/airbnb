export type CalendarState = {
  checkIn: Date | null;
  checkOut: Date | null;
  checkHover: Date | null;
};

export type CalendarActionType =
  | { type: CalendarTypes.CHECK_IN; data: Date }
  | { type: CalendarTypes.CHECK_OUT; data: Date }
  | {
      type: CalendarTypes.CHECK_HOVER;
      data: Date;
    }
  | {
      type: CalendarTypes.ALL_REMOVE;
    };

export type CalendarDispatches = {
  onCheckIn(date: Date): void;
  onCheckOut(date: Date): void;
  onCheckHover(date: Date): void;
  onCheckRemove(): void;
};

export type DirectionType = "FORWARD" | "BACKWARD" | null;

export type CalendarInfoType = {
  calendarArray: number[];
  year: number;
  month: number;
};

export enum CalendarTypes {
  CHECK_IN,
  CHECK_OUT,
  CHECK_HOVER,
  ALL_REMOVE,
}
