import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';

import CalendarBody from './CalendarBody';
import CalendarHead from './CalendarHead';
import { makeDate } from 'utility/dateUtil';

function CalendarModal() {
  const DATE: Date = new Date();
  const YEAR: number = DATE.getFullYear();
  const MONTH: number = DATE.getMonth() + 1;

  const [year, setYear] = useState<number>(YEAR);
  const [month, setMonth] = useState<any>(MONTH);
  const [earlyTotalDate, setEarlyTotalDate] = useState<number[] | string[]>([]);
  const [lastTotalDate, setLastTotalDate] = useState<number[] | string[]>([]);

  useEffect(() => {
    setEarlyTotalDate(makeDate(year, month));

    if (month === 12) {
      const totalMonth: number = 11;
      setLastTotalDate(makeDate(year + 1, month - totalMonth));
    } else {
      setLastTotalDate(makeDate(year, month + 1));
    }
  }, [month]);

  return (
    <Flex justify="space-between">
      <EarlyMonth>
        <CalendarHead
          year={year}
          month={month}
          setYear={setYear}
          setMonth={setMonth}
          position={'leftBtn'}
        />
        <CalendarBody totalDate={earlyTotalDate} year={year} month={month} />
      </EarlyMonth>

      <LateMonth>
        <CalendarHead
          year={year}
          month={month + 1}
          setYear={setYear}
          setMonth={setMonth}
          position={'rightBtn'}
        />
        <CalendarBody totalDate={lastTotalDate} year={year} month={month + 1} />
      </LateMonth>
    </Flex>
  );
}

const EarlyMonth = styled.div`
  float: right;
`;

const LateMonth = styled.div`
  float: left;
`;

export default CalendarModal;
