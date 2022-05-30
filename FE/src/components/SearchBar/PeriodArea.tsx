import * as S from '@components/SearchBar/SearchBar.style';
import { AREA_TYPE, NO_CONTENT, SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { PeriodTypes, defaultPeriod } from '@data';

interface PeriodAreaTypes {
  size: string;
  period: PeriodTypes;
}

// TODO: 작은 사이즈일 때 레이아웃 수정 필요
const PeriodArea = ({ size, period }: PeriodAreaTypes) => {
  const { checkIn, checkOut } = period;

  const isCheckInExist = checkIn !== defaultPeriod.checkIn;
  const isCheckOutExist = checkOut !== defaultPeriod.checkOut;

  const checkInContent = checkIn || NO_CONTENT[AREA_TYPE.PERIOD];
  const checkOutContent = checkOut || NO_CONTENT[AREA_TYPE.PERIOD];

  return (
    <S.PeriodArea>
      <S.ContentContainer>
        <S.Label>체크인</S.Label>
        <S.Content isContentExist={isCheckInExist}>{checkInContent}</S.Content>
      </S.ContentContainer>
      <S.ContentContainer>
        <S.Label>체크아웃</S.Label>
        <S.Content isContentExist={isCheckOutExist}>{checkOutContent}</S.Content>
      </S.ContentContainer>
      { size === SEARCH_BAR_SIZE.LARGE && isCheckInExist && isCheckOutExist && (
        <S.CloseButton>
          <Icon iconName={ICON_NAME.CLOSE_BTN} iconSize={ICON_SIZE.LARGE} />
        </S.CloseButton>
      ) }
    </S.PeriodArea>
  );
};

export default PeriodArea;
