import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CalendarBody from './CalendarBody';
import CalendarHead from './CalendarHead';

function Modal() {
  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [earlyTotalDate, setEarlyTotalDate] = useState([]);
  const [lastTotalDate, setLastTotalDate] = useState([]);

  const changeDate = (month) => {
    //이전 날짜
    let PVLastDate = new Date(YEAR, month - 1, 0).getDate();
    let PVLastDay = new Date(YEAR, month - 1, 0).getDay();

    //다음 날짜
    const ThisLastDay = new Date(YEAR, month, 0).getDay();
    const ThisLastDate = new Date(YEAR, month, 0).getDate();

    //이전 날짜 만들기
    let PREVIOUSDATE_ARR = [];
    if (PVLastDay !== 6) {
      for (let i = 0; i < PVLastDay + 1; i++) {
        PREVIOUSDATE_ARR.unshift(PVLastDate - i);
      }
    }

    //다음 날짜 만들기
    let NEXTDATE_ARR = [];
    for (let i = 1; i < 7 - ThisLastDay; i++) {
      if (i === 0) {
        return NEXTDATE_ARR;
      }
      NEXTDATE_ARR.push(i);
    }

    //현재날짜
    let TODAY_ARR = [];

    TODAY_ARR = [...Array(ThisLastDate + 1).keys()].slice(1);

    return PREVIOUSDATE_ARR.concat(TODAY_ARR, NEXTDATE_ARR);
  };

  useEffect(() => {
    setEarlyTotalDate(changeDate(month));
  }, [month]);

  useEffect(() => {
    setLastTotalDate(changeDate(month + 1));
  }, [month]);

  return (
    <>
      <ModalContainer>
        <Flex justify="space-between">
          <EarlyMonth>
            <CalendarHead
              year={year}
              month={month}
              setMonth={setMonth}
              position={'leftBtn'}
            />
            <CalendarBody totalDate={earlyTotalDate} />
          </EarlyMonth>

          <LateMonth>
            <CalendarHead
              year={year}
              month={month + 1}
              setMonth={setMonth}
              position={'rightBtn'}
            />
            <CalendarBody totalDate={lastTotalDate} />
          </LateMonth>
        </Flex>
      </ModalContainer>
    </>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  width: 870px;
  height: 499px;
  top: 190px;
  z-index: 10;
`;

const EarlyMonth = styled.div`
  float: right;
`;

const LateMonth = styled.div`
  float: left;
`;
export default Modal;
