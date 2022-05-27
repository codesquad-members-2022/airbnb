import { isEqual } from 'date-fns';

import { PickedDate, PickedDates, useDatePick } from '@/components/Calendar/context';

interface CheckIsSelected {
  (pickedDate: PickedDate | null, date: PickedDate): boolean;
}

interface CheckIsBetweenPickedDates {
  (pickedDates: PickedDates, date: PickedDate): boolean;
}

const checkIsSelected: CheckIsSelected = (pickedDate, { year, month, day }) => {
  if (pickedDate === null) {
    return false;
  }

  const { year: pYear, month: pMonth, day: pDay } = pickedDate;
  const compareDate = new Date(pYear, pMonth - 1, pDay);
  const currentDate = new Date(year, month - 1, day);
  return compareDate.getTime() === currentDate.getTime();
};

const checkIsBetweenPickedDates: CheckIsBetweenPickedDates = (
  { firstPick, secondPick },
  { year, month, day },
) => {
  if (!firstPick || !secondPick) {
    return false;
  }

  const { year: fYear, month: fMonth, day: fDay } = firstPick;
  const { year: sYear, month: sMonth, day: sDay } = secondPick;
  const firstPickDate = new Date(fYear, fMonth - 1, fDay);
  const currentDate = new Date(year, month - 1, day);
  const secondPickDate = new Date(sYear, sMonth - 1, sDay);

  return firstPickDate <= currentDate && currentDate <= secondPickDate;
};

interface UseDayCellInfo {
  (date: PickedDate): {
    isSelected: boolean;
    isBetweenPickedDates: boolean;
    isFirstPickDate: boolean;
    isSecondPickDate: boolean;
    onClickDayCell: () => void;
  };
}

export const useDayCellInfo: UseDayCellInfo = ({ year, month, day }) => {
  const [pickedDates, setPickedDates] = useDatePick();
  const { firstPick, secondPick } = pickedDates;
  const isSelected =
    checkIsSelected(firstPick, { year, month, day }) ||
    checkIsSelected(secondPick, { year, month, day });
  const isBetweenPickedDates = checkIsBetweenPickedDates(pickedDates, { year, month, day });
  const isFirstPickDate = false;
  const isSecondPickDate = false;

  const onClickDayCell = () => {
    // NOTE: 아무것도 선택되지 않은 경우 -> firstPick 업데이트
    // NOTE: 하나만 선택된 경우 -> secondPick 업데이트
    // NOTE: 두개 선택된 경우 -> 선택된 셀 클릭하는거 아니면 클릭 무시
    // NOTE: 선택된 셀을 다시 클릭한 경우 null로
    // NOTE: firstPick을 다시 클릭하면 secondPick이 firstPick이 된다.

    if (typeof day !== 'number') {
      return;
    }

    const newPickedDates = { year, month, day };

    if (firstPick === null) {
      setPickedDates({
        ...pickedDates,
        firstPick: newPickedDates,
      });
      return;
    }

    if (secondPick === null) {
      if (firstPick.year > year || firstPick.month > month || firstPick.day > day) {
        setPickedDates((prevPickedDates) => ({
          firstPick: newPickedDates,
          secondPick: prevPickedDates.firstPick,
        }));
        return;
      }

      setPickedDates({
        ...pickedDates,
        secondPick: newPickedDates,
      });
      return;
    }

    if (checkIsSelected(secondPick, { year, month, day })) {
      setPickedDates({ ...pickedDates, secondPick: null });
      return;
    }

    if (checkIsSelected(firstPick, { year, month, day })) {
      // NOTE: firstPick을 다시 클릭하면 secondPick이 firstPick이 된다.
      setPickedDates((prevPickedDates) => ({
        firstPick: prevPickedDates.secondPick ? pickedDates.secondPick : null,
        secondPick: null,
      }));
    }
  };

  return { isSelected, isBetweenPickedDates, isFirstPickDate, isSecondPickDate, onClickDayCell };
};
