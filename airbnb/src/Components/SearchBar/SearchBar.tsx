import { useContext, useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNullGuard } from '@/Hooks/useNullguard';
import { Schedule } from '@/libs/Schedule';
import {
  SearchingContext,
  SearchingDispatchContext,
  CalenderAction,
} from '@/Contexts/Searching';
import { ModalStateContext, ModalDispatchContext } from '@/Contexts/Modal';
import { PriceGraph } from '@/Components/PriceGraph';
import { Modal } from '../Modal/Modal';
import * as S from './SearchBar.style';
import { SearchBarItem } from './Item';
import { SearchButton } from './SearchButton';

type DateDispatch = (
  action: (date: Date) => CalenderAction,
) => (date: Date) => void;

export function SearchBar() {
  const {
    calendar: { startDate, endDate },
  } = useNullGuard(SearchingContext);
  const {
    getStartDateAction,
    getEndDateAction,
    getResetScheduleAction,
    calendarDispatch,
  } = useNullGuard(SearchingDispatchContext);
  const { isShowModal } = useContext(ModalStateContext);
  const { showModal } = useContext(ModalDispatchContext);

  const dateDispatch: DateDispatch = action => date => {
    calendarDispatch(action(date));
  };

  const obj = {
    schedule: (
      <Schedule
        startDate={startDate}
        endDate={endDate}
        setStartDate={dateDispatch(getStartDateAction)}
        setEndDate={dateDispatch(getEndDateAction)}
      />
    ),
    가격: <PriceGraph />,
    사람: '사람',
  };

  const [currentKey, setCurrentKey] = useState<'schedule' | '가격' | '사람'>(
    'schedule',
  );
  return (
    <S.searchBarWrapper>
      {isShowModal && (
        <Modal top={80} right={0}>
          {obj[currentKey]}
        </Modal>
      )}

      <SearchBarItem
        title="체크인"
        value={
          startDate
            ? `${startDate.getMonth() + 1}월 ${startDate.getDate()}일`
            : '날짜 입력'
        }
        width={112}
        onClick={e => {
          e.stopPropagation();
          showModal();
          setCurrentKey('schedule');
        }}
      />
      <SearchBarItem
        title="체크아웃"
        value={
          endDate
            ? `${endDate.getMonth() + 1}월 ${endDate.getDate()}일`
            : '날짜 입력'
        }
        width={112}
        onClick={e => {
          e.stopPropagation();
          showModal();
          setCurrentKey('schedule');
        }}
      />
      {/* TODO: 클로즈 버튼 컴포넌트 생성 */}
      <S.CloseButton
        type="button"
        onClick={() => {
          calendarDispatch(getResetScheduleAction());
        }}
      >
        <CloseRoundedIcon sx={{ fontSize: '13px' }} />
      </S.CloseButton>
      <S.line />
      <SearchBarItem
        title="요금"
        value="내용"
        width={208}
        onClick={e => {
          e.stopPropagation();
          showModal();
          setCurrentKey('가격');
        }}
      />
      <S.CloseButton type="button">
        <CloseRoundedIcon sx={{ fontSize: '13px' }} />
      </S.CloseButton>
      <S.line />
      <SearchBarItem
        title="인원"
        value="내용"
        width={144}
        onClick={e => {
          e.stopPropagation();
          showModal();
          setCurrentKey('사람');
        }}
      />
      <S.CloseButton type="button">
        <CloseRoundedIcon sx={{ fontSize: '13px' }} />
      </S.CloseButton>
      <SearchButton />
    </S.searchBarWrapper>
  );
}
