import { useRef } from 'react';

import PersonnelModal from '@components/SearchBar/Modal/PersonnelModal';
import { AreaPropsTypes } from '@components/SearchBar/PriceArea';
import * as S from '@components/SearchBar/SearchBar.style';
import { AREA_TYPE, NO_CONTENT, SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { PersonnelContextTypes, PersonnelProvider } from '@context/personnel/Provider';
import WithProvider from '@hoc/WithProvider';
import { usePersonnelState } from '@lib/hooks/useContext';
import useModal from '@lib/hooks/useModal';

const PersonnelArea = ({ size }: AreaPropsTypes) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isPersonnelModalOpen, setIsPersonnelModalOpen] = useModal({ modalRef });
  const { numberOfAdults, numberOfChildren, numberOfBabies, resetAllCount } =
    usePersonnelState() as PersonnelContextTypes;

  const isPersonnelExist = numberOfAdults + numberOfChildren + numberOfBabies !== 0;

  const getPersonnelContent = () => {
    let content = [];
    if (numberOfAdults + numberOfChildren) content.push(`게스트 ${numberOfAdults + numberOfChildren}명`);
    if (numberOfBabies) content.push(`유아 ${numberOfBabies}명`);
    return content.join(', ');
  };

  const personnelContent = isPersonnelExist
    ? getPersonnelContent()
    : NO_CONTENT[AREA_TYPE.PERSONNEL];

  const openPersonnelModal = () => setIsPersonnelModalOpen(true);

  return (
    <>
      <S.PersonnelArea onClick={openPersonnelModal}>
        {size === SEARCH_BAR_SIZE.LARGE ? (
          <>
            <S.ContentContainer>
              <S.Label>인원</S.Label>
              <S.Content isContentExist={isPersonnelExist}>{personnelContent}</S.Content>
            </S.ContentContainer>
            {isPersonnelExist && (
              <S.CloseButton onClick={resetAllCount}>
                <Icon iconName={ICON_NAME.CLOSE_BTN} iconSize={ICON_SIZE.LARGE} />
              </S.CloseButton>
            )}
          </>
        ) : (
          <S.Content isContentExist={isPersonnelExist}>{personnelContent}</S.Content>
        )}
      </S.PersonnelArea>
      {isPersonnelModalOpen && <PersonnelModal modalRef={modalRef} />}
    </>
  );
};

export default WithProvider({
  Component: PersonnelArea,
  Provider: PersonnelProvider,
});
