import { usePeriodState } from 'contexts/periodContext';
import Calendar from 'components/Calender/Calendar';
import styled from 'styled-components';
import { ModalWrap } from './styled';

function PeriodModal() {
  const state = usePeriodState();
  const thisDate: Date = state.date;
  return (
    <PeriodModalWrap>
      <Calendar date={thisDate} />
    </PeriodModalWrap>
  );
}

const PeriodModalWrap = styled(ModalWrap)`
  width: 916px;
  height: 512px;
  padding: 64px 88px;
  flex-direction: column;
`;

export default PeriodModal;
