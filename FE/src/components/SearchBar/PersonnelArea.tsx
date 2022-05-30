import * as S from '@components/SearchBar/SearchBar.style';
import { AREA_TYPE, NO_CONTENT, SEARCH_BAR_SIZE } from '@components/SearchBar/constants';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { PersonnelTypes, defaultPersonnel } from '@data';

interface PersonnelAreaTypes {
  size: string;
  personnel: PersonnelTypes;
}

const getPriceContent = (personnel: PersonnelTypes) => {
  return Object.entries(personnel)
    .reduce((content: string[], [key, value]) => {
      content.push(`${key} ${value}명`);
      return content;
    }, [])
    .join(', ');
};

// TODO: 작은 사이즈일 때 레이아웃 수정 필요
const PersonnelArea = ({ size, personnel }: PersonnelAreaTypes) => {
  const { guest, kid } = personnel;
  const isPersonnelExist = guest !== defaultPersonnel.guest || kid !== defaultPersonnel.kid;

  const priceContent = isPersonnelExist
    ? getPriceContent(personnel)
    : NO_CONTENT[AREA_TYPE.PERSONNEL];

  return (
    <S.PersonnelArea>
      <S.ContentContainer>
        <S.Label>인원</S.Label>
        <S.Content isContentExist={isPersonnelExist}>{priceContent}</S.Content>
      </S.ContentContainer>
      { size === SEARCH_BAR_SIZE.LARGE && isPersonnelExist && (
        <S.CloseButton>
          <Icon iconName={ICON_NAME.CLOSE_BTN} iconSize={ICON_SIZE.LARGE} />
        </S.CloseButton>
      ) }
    </S.PersonnelArea>
  );
};

export default PersonnelArea;
