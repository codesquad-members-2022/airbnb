import * as S from '@components/SearchBar/Modal/Modal.style';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';
import { PersonnelStateWithType, usePersonnelState } from '@lib/hooks/useContext';

interface PersonnelListItemPropsTypes {
  type: string;
  description: string;
}

const MAX_COUNT = 8;

const PersonnelListItem = ({ type, description }: PersonnelListItemPropsTypes) => {

  const [personnelCount, setPersonnelCount] = usePersonnelState(type) as PersonnelStateWithType;

  const increaseCount = () => {
    if (personnelCount === MAX_COUNT) return;
    setPersonnelCount((prevPersonnelCount) => prevPersonnelCount + 1)
  };
  const decreaseCount = () => {
    if (!personnelCount) return;
    setPersonnelCount((prevPersonnelCount) => prevPersonnelCount - 1)
  };

  return (
    <S.PersonnelListItem>
      <S.TextArea>
        <S.Title>{type}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextArea>
      <S.CountArea>
        <S.CountButton onClick={decreaseCount}>
          <Icon iconName={ICON_NAME.MINUS} iconSize={ICON_SIZE.X_LARGE} />
        </S.CountButton>
        <S.PersonnelCount>{personnelCount}</S.PersonnelCount>
        <S.CountButton onClick={increaseCount}>
          <Icon iconName={ICON_NAME.PLUS} iconSize={ICON_SIZE.X_LARGE} />
        </S.CountButton>
      </S.CountArea>
    </S.PersonnelListItem>
  );
};

export default PersonnelListItem;
