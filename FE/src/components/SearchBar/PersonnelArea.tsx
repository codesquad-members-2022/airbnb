import { AreaPropsTypes } from '@components/SearchBar/PriceArea';
import * as S from '@components/SearchBar/SearchBar.style';
import { AREA_TYPE, NO_CONTENT, SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { PersonnelTypes, defaultPersonnel } from '@data';

const getPersonnelContent = (personnel: PersonnelTypes) => {
  return Object.entries(personnel)
    .reduce((content: string[], [key, value]) => {
      value && content.push(`${key} ${value}명`);
      return content;
    }, [])
    .join(', ');
};

const PersonnelArea = ({ size }: AreaPropsTypes) => {
  const { guest, kid } = defaultPersonnel;
  const isPersonnelExist = guest !== defaultPersonnel.guest || kid !== defaultPersonnel.kid;

  const personnelContent = isPersonnelExist
    ? getPersonnelContent(defaultPersonnel)
    : NO_CONTENT[AREA_TYPE.PERSONNEL];

  return (
    <S.PersonnelArea>
      {size === SEARCH_BAR_SIZE.LARGE ? (
        <>
          <S.ContentContainer>
            <S.Label>인원</S.Label>
            <S.Content isContentExist={isPersonnelExist}>{personnelContent}</S.Content>
          </S.ContentContainer>
          {isPersonnelExist && (
            <S.CloseButton>
              <Icon iconName={ICON_NAME.CLOSE_BTN} iconSize={ICON_SIZE.LARGE} />
            </S.CloseButton>
          )}
        </>
      ) : (
        <S.Content isContentExist={isPersonnelExist}>{personnelContent}</S.Content>
      )}
    </S.PersonnelArea>
  );
};

export default PersonnelArea;
