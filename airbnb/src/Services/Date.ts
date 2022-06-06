export const getMonthDate = (
  year: number,
  month: number,
  WEEKDAY: string[],
) => {
  const fullDate: number = 32 - new Date(year, month, 32).getDate(); // 해달 달이 총 몇일인지
  const firstDate: number = new Date(year, month, 1).getDay(); // 1일이 몇요일인지
  const addDate = fullDate + firstDate;

  const firstWeek = Array.from(
    { length: WEEKDAY.length },
    (_, idx) => idx - firstDate + 1,
  );

  const currentMonth = Array.from(
    {
      length: Math.floor(addDate / WEEKDAY.length + 1),
    },
    (_, i) =>
      firstWeek.map(v => {
        const day = v + i * 7;
        return day < 1 || day > fullDate ? null : new Date(year, month, day);
      }),
  );
  return currentMonth;
};

export const isStartDate = (
  day: Date | null,
  startDate: Date | null,
): boolean => !!day && startDate?.getTime() === day.getTime();

export const isEndDate = (day: Date | null, endDate: Date | null) =>
  !!day && endDate?.getTime() === day.getTime();

export function isSelected(
  day: Date | null,
  startDate: Date | null,
  endDate: Date | null,
) {
  return (!!day && isStartDate(day, startDate)) || isEndDate(day, endDate);
}

export const isBetweenSelected = (
  day: Date | null,
  startDate: Date | null,
  endDate: Date | null,
) => !!day && !!startDate && !!endDate && startDate <= day && endDate >= day;
