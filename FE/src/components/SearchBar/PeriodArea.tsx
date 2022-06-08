import Calendar from '@components/Calendar';
import * as S from '@components/SearchBar/SearchBar.style';
import { AREA_TYPE, NO_CONTENT, SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { CalendarProvider } from '@context/calendar/Provider';
import { defaultPeriod } from '@data';
import WithProvider from '@hoc/WithProvider';
import { useCalendarState } from '@lib/hooks/useContext';

export interface PeriodAreaTypes {
  size: string;
}

const PeriodArea = ({ size }: PeriodAreaTypes) => {
  const { checkIn, checkOut } = useCalendarState();

  const isCheckInExist = checkIn !== defaultPeriod.checkIn;
  const isCheckOutExist = checkOut !== defaultPeriod.checkOut;

  const checkInContent = checkIn || NO_CONTENT[AREA_TYPE.PERIOD];
  const checkOutContent = checkOut || NO_CONTENT[AREA_TYPE.PERIOD];

  const periodContent =
    isCheckInExist && isCheckOutExist ? `${checkIn} ~ ${checkOut}` : NO_CONTENT[AREA_TYPE.PERIOD];

  return (
    <S.PeriodArea>
      {size === SEARCH_BAR_SIZE.LARGE ? (
        <>
          <S.ContentContainer>
            <S.Label>체크인</S.Label>
            <S.Content isContentExist={isCheckInExist}>{checkInContent}</S.Content>
          </S.ContentContainer>
          <S.ContentContainer>
            <S.Label>체크아웃</S.Label>
            <S.Content isContentExist={isCheckOutExist}>{checkOutContent}</S.Content>
          </S.ContentContainer>
          {isCheckInExist && isCheckOutExist && (
            <S.CloseButton>
              <Icon iconName={ICON_NAME.CLOSE_BTN} iconSize={ICON_SIZE.LARGE} />
            </S.CloseButton>
          )}
          <Calendar />
        </>
      ) : (
        <S.Content isContentExist={isCheckInExist && isCheckOutExist}>{periodContent}</S.Content>
      )}
    </S.PeriodArea>
  );
};

export default WithProvider({
  Component: PeriodArea,
  Provider: CalendarProvider,
});
