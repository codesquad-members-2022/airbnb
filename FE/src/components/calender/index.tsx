import * as React from 'react';
import CalenderPicker from 'components/calender/components/CalenderPicker';
import { DateProvider, FilterType } from 'components/calender/context';

export interface ICalenderProps {
  count: number;
  year: number;
  month: number;
  isSlider: boolean;
}

interface ICalendarAppProps extends ICalenderProps {
  filter: FilterType;
  period: {
    checkIn?: Date;
    checkOut?: Date;
  };
  setCheckedDate: (checkIn?: Date, checkOut?: Date) => void;
}

const CalenderApp = ({ setCheckedDate, period, filter, ...props }: ICalendarAppProps) => {
  return (
    <DateProvider period={period} filter={filter} setCheckedDate={setCheckedDate}>
      <CalenderPicker {...props} />
    </DateProvider>
  );
};

export default CalenderApp;
