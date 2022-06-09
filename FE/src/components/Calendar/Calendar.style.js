import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 916px;
  height: auto;
  background: ${({ theme }) => theme.color.white};
  border-radius: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);

  // 모달창 positon 추후 삭제 예정
  position: absolute;
  top: 200%;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const CalendarWrapper = styled.div`
  width: 40%;
`;

export const Calendar = styled.div`
  display: flex;
`;

export const Month = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
  h1 {
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    letter-spacing: 0.2rem;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const Week = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0 0.1rem;
  display: flex;
  align-items: center;

  div {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    letter-spacing: 0.1rem;
    width: calc(40rem / 7);
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.color.grey3};
  }
`;

export const Days = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.1rem;

  button {
    font-size: ${({ theme }) => theme.fontSize.xSmall};
    width: calc(22.5rem / 7);
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${({ theme }) => theme.color.grey1};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    &:active {
      background:#000;
      color:#fff;
      border-radius:50%;
    }
`;

export const Btn = styled.div`
  width: 6px;
  height: 12px;
  margin-top: 20px;
`;
