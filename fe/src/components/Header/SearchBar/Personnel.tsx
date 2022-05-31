import { usePersonnelState } from 'contexts/PersonnelContext';

import { ClickModal } from '.';
import ResetButton from './common/ResetButton';
import InputButton from './common/InputButton';

function Personnel({ clickModal, isClicked, focusModal }: ClickModal) {
  const { counterText } = usePersonnelState();

  const FILTER_ID = 'PERSONNEL';
  const BUTTON_INFO = {
    id: FILTER_ID,
    title: '인원',
    inputText: counterText,
    ariaLabel: '게스트 추가 버튼',
  };
  const RESET_BUTTON_ARIA_LABEL = '게스트 추가 취소 버튼';

  return (
    <>
      <InputButton
        clickModal={clickModal}
        buttonInfo={BUTTON_INFO}
        styleOptions={{ width: '124px' }}
      />
      {isClicked && focusModal === FILTER_ID && <ResetButton ariaLabel={RESET_BUTTON_ARIA_LABEL} />}
    </>
  );
}

export default Personnel;
