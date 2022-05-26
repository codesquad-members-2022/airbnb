import styled from 'styled-components';

export const ScheduleWrapper = styled.div`
  display: flex;
  height: 512px;
  width: 916px;
  border-radius: 40px;
  padding: 64px 88px;
  background-color: white;
  margin-top: 16px;
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

export const WeekDate = styled.ul`
  display: flex;

  li {
    color: #bdbdbd;
    height: 48px;
    width: 48px;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    text-align: center;
  }
`;
