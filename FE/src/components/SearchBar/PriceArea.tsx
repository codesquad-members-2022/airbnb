import * as S from '@components/SearchBar/SearchBar.style';
import { AREA_TYPE, NO_CONTENT, SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { PriceTypes, defaultPrice } from '@data';
import { formatPrice } from '@lib/utils';

interface PriceAreaTypes {
  size: string;
  price: PriceTypes;
}

// TODO: 작은 사이즈일 때 레이아웃 수정 필요
const PriceArea = ({ size, price }: PriceAreaTypes) => {
  const { min, max } = price;
  const isPriceExist = min !== defaultPrice.min || max !== defaultPrice.max;

  const priceContent = isPriceExist
    ? `${formatPrice(min)} ~ ${formatPrice(max)}`
    : NO_CONTENT[AREA_TYPE.PRICE];

  return (
    <S.PriceArea>
      <S.ContentContainer>
        <S.Label>요금</S.Label>
        <S.Content isContentExist={isPriceExist}>{priceContent}</S.Content>
      </S.ContentContainer>
      { size === SEARCH_BAR_SIZE.LARGE && isPriceExist && (
        <S.CloseButton>
          <Icon iconName={ICON_NAME.CLOSE_BTN} iconSize={ICON_SIZE.LARGE} />
        </S.CloseButton>
      ) }
    </S.PriceArea>
  );
};

export default PriceArea;
