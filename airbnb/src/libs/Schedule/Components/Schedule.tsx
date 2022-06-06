import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { ScheduleProps, ScheduleProvider } from '../Contexts';
import { useCurrentDate } from '../Hooks/ScheduleHooks';
import * as S from './Schedule.style';
import { Calendar } from './Calendar';

export function Schedule({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: ScheduleProps): JSX.Element {
  const { changeCurrentDate, currentDate } = useCurrentDate();

  return (
    <ScheduleProvider
      startDate={startDate}
      endDate={endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    >
      <S.ScheduleWrapper>
        <S.BackButton type="button" onClick={changeCurrentDate(-1)}>
          <ArrowBackIosRoundedIcon fontSize="small" />
        </S.BackButton>
        {/* TODO: 버튼 컴포넌트 분리 */}
        <S.ForwardButton type="button" onClick={changeCurrentDate(1)}>
          <ArrowForwardIosRoundedIcon fontSize="small" />
        </S.ForwardButton>
        <Calendar date={currentDate} />
        <Calendar
          date={
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
          }
        />
      </S.ScheduleWrapper>
    </ScheduleProvider>
  );
}
