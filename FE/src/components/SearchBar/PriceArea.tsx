import * as S from '@components/SearchBar/SearchBar.style';
import { AREA_TYPE, NO_CONTENT, SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { PriceTypes, defaultPrice } from '@data';
import { formatPrice } from '@lib/utils';

interface PriceAreaTypes {
  size: string;
  price: PriceTypes;
}

const PriceArea = ({ size, price }: PriceAreaTypes) => {
  const { min, max } = price;
  const isPriceExist = min !== defaultPrice.min || max !== defaultPrice.max;

  const priceContent = isPriceExist
    ? `${formatPrice(min)} ~ ${formatPrice(max)}`
    : NO_CONTENT[AREA_TYPE.PRICE];

  return (
    <S.PriceArea>
      {size === SEARCH_BAR_SIZE.LARGE ? (
        <>
          <S.ContentContainer>
            <S.Label>요금</S.Label>
            <S.Content isContentExist={isPriceExist}>{priceContent}</S.Content>
          </S.ContentContainer>
          {isPriceExist && (
            <S.CloseButton>
              <Icon iconName={ICON_NAME.CLOSE_BTN} iconSize={ICON_SIZE.LARGE} />
            </S.CloseButton>
          )}
        </>
      ) : (
        <S.Content isContentExist={isPriceExist}>{priceContent}</S.Content>
      )}
    </S.PriceArea>
  );
};

export default PriceArea;
