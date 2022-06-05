import { ReactNode } from "react";

import { CalendarTypes, ModalList } from "@constants/calendar";

// ModalList가 enum인데 받지 못해 object로 적용
export type ModalOpenType = {
  modalOpen: number;
  setModalOpen: React.Dispatch<React.SetStateAction<number>>;
};

export type CalendarState = {
  checkIn: Date | null;
  checkOut: Date | null;
};

export type CalendarActionType =
  | { type: CalendarTypes.CHECK_IN; data: Date }
  | { type: CalendarTypes.CHECK_OUT; data: Date }
  | {
      type: CalendarTypes.ALL_REMOVE;
    };

export type CalendarDispatches = {
  onCheckIn(date: Date): void;
  onCheckOut(date: Date): void;
  onCheckRemove(): void;
};

export type DirectionType = "FORWARD" | "BACKWARD" | null;

export type CalendarInfoType = {
  calendarArray: number[];
  year: number;
  month: number;
};

export const getDate = (year: number, month: number, date: number | undefined): Date => {
  return new Date(year, month, date);
};

// 달의 첫번째 날의 요일 구하기
export const getFirstDay = (year: number, month: number) => {
  const firstDay = new Date(year, month, 0).getDay() + 1;
  return firstDay === 7 ? 0 : firstDay;
};

// 달의 마지막 날 구하기
export const getLastDate = (year: number, month: number) => {
  const lastDate = new Date(year, month + 1, 0).getDate();
  return lastDate;
};

// 달력 배열 만들기
export const getCalendarArray = (year: number, month: number) => {
  const firstDay = getFirstDay(year, month);
  const lastDate = getLastDate(year, month);

  const calendarArray = Array.from({ length: lastDate + firstDay }, (_, index) => {
    return index < firstDay ? 0 : index - firstDay + 1;
  });
  return calendarArray;
};

// 방향에 따른 페이지 옮기기
export const getDirectionValue = (direction: DirectionType) => {
  switch (direction) {
    case "FORWARD":
      return -1;
    case "BACKWARD":
      return +1;
    default:
      return 0;
  }
};

export const getCheckInTemplate = (date: Date | null): string | null => {
  if (!date) {
    return null;
  }

  const month = Number(date?.getMonth()) + 1;
  const year = Number(date?.getDate());
  return `${month}월${year}일`;
};
