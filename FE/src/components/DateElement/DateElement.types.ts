export interface IDateElement {
  dateInfo?: { id: number; year: number; month: number; date: number };
  past?: boolean;
}

export interface IDateElementContentStyle extends IDateElement {
  isSelcet?: boolean;
  isRange?: boolean;
}

export interface IDateElementProps extends IDateElement {
  calendarClickCount: { current: number };
}

export interface IDateElementCircleStyle extends IDateElement {
  isRange?: boolean;
}
