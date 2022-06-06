import styled from 'styled-components';

export const Container = styled.div`
  width: 916px;
  height: auto;
  background: #fff;
  border-radius: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);

  // 모달창 positon 추후 삭제 예정
  position: absolute;
  top: 30%;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
`;
export const CalenderWrapper = styled.div`
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
    font-weight: 400;
    letter-spacing: 0.2rem;
  }
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Week = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0 0.1rem;
  display: flex;
  align-items: center;

  div {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.1rem;
    width: calc(40rem / 7);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #828282;
  }
`;

export const Days = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.1rem;

  div {
    font-size: 12px;
    width: calc(22.5rem / 7);
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
    color: #333333;
    font-weight: 700;
  }
`;

export const Btn = styled.div`
  width: 6px;
  height: 12px;
  margin-top: 20px;
`;
