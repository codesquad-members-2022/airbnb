import * as S from '@components/SearchBar/SearchBar.style';
import Icon, { ICON_NAME, ICON_SIZE } from '@components/common/Icon';

export const SEARCH_BUTTON_SIZE: { [key: string]: string } = {
  SMALL: 'SMALL',
  LARGE: 'LARGE',
};

export interface SearchButtonTypes {
  isButtonActive: boolean;
  size: string;
}

const SearchButton = ({ isButtonActive, size }: SearchButtonTypes) => {
  const buttonSize = size === SEARCH_BUTTON_SIZE.SMALL ? ICON_SIZE.MEDIUM : ICON_SIZE.LARGE;
  const isContentWillShow = size === SEARCH_BUTTON_SIZE.LARGE && isButtonActive;

  return (
    <S.SearchButton isContentWillShow={isContentWillShow} aria-label='검색 버튼'>
      <Icon iconName={ICON_NAME.SEARCH} iconSize={buttonSize} />
      {isContentWillShow && <S.ButtonContent>검색</S.ButtonContent>}
    </S.SearchButton>
  );
};

export default SearchButton;
