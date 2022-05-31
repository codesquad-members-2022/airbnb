import { usePriceState } from 'contexts/PriceContext';

import { CommonContainer } from 'components/Header/SearchBar/searchBar.styled';
import ResetButton from './common/ResetButton';
import InputButton from './common/InputButton';

import { ClickModal } from '.';

function Price({ clickModal, isClicked, focusModal }: ClickModal) {
  const { rangeText } = usePriceState();

  const FILTER_ID = 'PRICE';
  const BUTTON_INFO = {
    id: FILTER_ID,
    title: '요금',
    inputText: rangeText,
    ariaLabel: '요금 입력 버튼',
  };
  const RESET_BUTTON_ARIA_LABEL = '요금 입력 취소 버튼';

  return (
    <CommonContainer isClicked={isClicked} focusModal={focusModal} id={FILTER_ID}>
      <InputButton clickModal={clickModal} buttonInfo={BUTTON_INFO} />
      {isClicked && focusModal === FILTER_ID && <ResetButton ariaLabel={RESET_BUTTON_ARIA_LABEL} />}
    </CommonContainer>
  );
}

export default Price;
