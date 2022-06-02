import * as TYPE from './types';

export const getStartDateAction = (startDate: Date): TYPE.CalenderAction => {
  return { type: 'SET_START_DATE', date: startDate };
};

export const getEndDateAction = (endDate: Date): TYPE.CalenderAction => {
  return { type: 'SET_END_DATE', date: endDate };
};

export const getScheduleDisplayAction = (): TYPE.CalenderAction => {
  return { type: 'SET_DISPLAY' };
};

export const getResetScheduleAction = (): TYPE.CalenderAction => {
  return { type: 'RESET' };
};
