import React, { useContext, createContext, useState } from 'react';

export interface PickedDate {
  year: number;
  month: number;
  day: number;
}

export type PickedDates = {
  firstPick: PickedDate | null;
  secondPick: PickedDate | null;
};
type PickedDatesDispatch = React.Dispatch<React.SetStateAction<PickedDates>>;

const PickedDatesContext = createContext<PickedDates | null>(null);
const PickedDatesDispatchContext = createContext<PickedDatesDispatch | null>(null);

export function DatePickerProvider({ children }: { children: React.ReactNode }) {
  const [pickedDates, setPickedDates] = useState<PickedDates>({
    firstPick: null,
    secondPick: null,
  });

  return (
    <PickedDatesDispatchContext.Provider value={setPickedDates}>
      <PickedDatesContext.Provider value={pickedDates}>{children}</PickedDatesContext.Provider>
    </PickedDatesDispatchContext.Provider>
  );
}

export const useDatePick = (): [PickedDates, PickedDatesDispatch] => {
  const pickedDates = useContext(PickedDatesContext);
  const setPickedDates = useContext(PickedDatesDispatchContext);

  if (!pickedDates || !setPickedDates) {
    throw new Error('DatePick Error');
  }

  return [pickedDates, setPickedDates];
};

export const useDatePickGetter = () => {
  const pickedDates = useContext(PickedDatesContext);

  if (!pickedDates) {
    throw new Error('DatePickGetter Error');
  }

  return pickedDates;
};

export const useDatePickSetter = () => {
  const setPickedDates = useContext(PickedDatesDispatchContext);

  if (!setPickedDates) {
    throw new Error('DatePickSetter Error');
  }

  return setPickedDates;
};
