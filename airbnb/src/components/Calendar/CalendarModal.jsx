import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';

import CalendarBody from './CalendarBody';
import CalendarHead from './CalendarHead';
import { changeDate } from 'utility/date';

function Modal() {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;

  const [year, setYear] = useState(YEAR);
  const [month, setMonth] = useState(MONTH);
  const [earlyTotalDate, setEarlyTotalDate] = useState([]);
  const [lastTotalDate, setLastTotalDate] = useState([]);

  useEffect(() => {
    setEarlyTotalDate(changeDate(year, month));
    setLastTotalDate(changeDate(year, month + 1));
  }, [month]);

  return (
    <ModalContainer>
      <Flex justify="space-between">
        <EarlyMonth>
          <CalendarHead
            year={year}
            month={month}
            setYear={setYear}
            setMonth={setMonth}
            position={'leftBtn'}
          />
          <CalendarBody totalDate={earlyTotalDate} />
        </EarlyMonth>

        <LateMonth>
          <CalendarHead
            year={year}
            month={month + 1}
            setYear={setYear}
            setMonth={setMonth}
            position={'rightBtn'}
          />
          <CalendarBody totalDate={lastTotalDate} />
        </LateMonth>
      </Flex>
    </ModalContainer>
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
