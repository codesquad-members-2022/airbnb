import styled, { css } from 'styled-components';

type ScheduleWrapperProp = {
  shouldDisplay: boolean;
};

export const ScheduleWrapper = styled.div<ScheduleWrapperProp>`
  position: absolute;
  left: 0;
  top: 76px;
  display: ${({ shouldDisplay }) => (shouldDisplay ? 'flex' : 'none')};
  justify-content: space-between;
  height: 512px;
  width: 916px;
  border-radius: 40px;
  padding: 64px 88px;
  background-color: white;
  margin-top: 16px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const Calendar = styled.div`
  display: flex;
  width: 336px;
  flex-direction: column;
  align-items: center;
`;

export const WeekDay = styled.ul`
  display: flex;

  li {
    color: #828282;
    height: 24px;
    width: 48px;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    text-align: center;
  }
`;

// TODO: 스타일드 컴포넌트 타입 어떻게 관리할지

type CalendarDayProps = {
  isSelected: boolean;
};

export const CalendarDay = styled.div<CalendarDayProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #828282;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #333333;
      color: white;
    `}
`;

type CalendarDayBackgroundProps = {
  isBetweenSelected: boolean;
  isStartDate: boolean;
  isEndDate: boolean;
};
export const CandarDayBackground = styled.li<CalendarDayBackgroundProps>`
  height: 48px;
  width: 48px;
  ${({ isBetweenSelected, isStartDate, isEndDate }) =>
    isBetweenSelected &&
    css`
      background-color: #f5f5f7;
      border-radius: ${isStartDate ? `50%` : `0`} ${isEndDate ? `50%` : `0`}
        ${isEndDate ? `50%` : `0`} ${isStartDate ? `50%` : `0`};
    `}
`;

export const WeekDate = styled.ul`
  display: flex;
  margin-top: 4px;
`;

export const Date = styled.div`
  font-size: 16px;
  line-height: 23px;
  margin-bottom: 24px;
  font-weight: 700;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 90px;
  top: 63px;
`;

export const ForwardButton = styled.button`
  position: absolute;
  right: 90px;
  top: 63px;
`;
