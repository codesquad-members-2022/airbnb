import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNullGuard } from '@/Hooks/SearchBarHooks';
import {
  SearchingContext,
  SearchingDispatchContext,
  CalenderAction,
} from '@/Contexts/Searching';
import * as S from './SearchBar.style';
import { Schedule } from '../Schedule/Schedule';
import { SearchBarItem } from './Item';
import { SearchButton } from './SearchButton';

export function SearchBar() {
  const {
    calendar: { startDate, endDate },
  } = useNullGuard(SearchingContext);
  const { getStartDateAction, getEndDateAction, calendarDispatch } =
    useNullGuard(SearchingDispatchContext);

  const dateDispatch =
    (action: (date: Date) => CalenderAction) => (date: Date) => {
      calendarDispatch(action(date));
    };

  return (
    <S.searchBarWrapper>
      <Schedule
        startDate={startDate}
        endDate={endDate}
        setStartDate={dateDispatch(getStartDateAction)}
        setEndDate={dateDispatch(getEndDateAction)}
      />

      <SearchBarItem
        title="체크인"
        value={
          startDate
            ? `${startDate.getMonth() + 1}월 ${startDate.getDate()}일`
            : '날짜 입력'
        }
        width={112}
      />
      <SearchBarItem
        title="체크아웃"
        value={
          endDate
            ? `${endDate.getMonth() + 1}월 ${endDate.getDate()}일`
            : '날짜 입력'
        }
        width={112}
      />
      {/* TODO: 클로즈 버튼 컴포넌트 생성 */}
      <S.CloseButton type="button">
        <CloseRoundedIcon sx={{ fontSize: '13px' }} />
      </S.CloseButton>
      <S.line />
      <SearchBarItem title="요금" value="내용" width={208} />
      <S.CloseButton type="button">
        <CloseRoundedIcon sx={{ fontSize: '13px' }} />
      </S.CloseButton>
      <S.line />
      <SearchBarItem title="인원" value="내용" width={144} />
      <S.CloseButton type="button">
        <CloseRoundedIcon sx={{ fontSize: '13px' }} />
      </S.CloseButton>
      <SearchButton />
    </S.searchBarWrapper>
  );
}
