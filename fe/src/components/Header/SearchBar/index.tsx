import { useModal } from 'hooks/useModal';

import { Divider } from '@mui/material';
import {
  SearchBarWrap,
  SearchBarContainer,
  CommonContainer,
} from 'components/Header/SearchBar/searchBar.styled';

import Period from 'components/Header/SearchBar/Period';
import Personnel from 'components/Header/SearchBar/Personnel';
import Price from 'components/Header/SearchBar/Price';
import SearchButton from 'components/Header/SearchBar/SearchButton';

import PeriodModal from 'components/Modals/PeriodModal';
import PersonnelModal from 'components/Modals/Personnel';
import SetPriceModal from 'components/Modals/Price';

export type ClickModal = {
  onClickEvent?: (e: React.MouseEvent<HTMLElement>) => void;
  clickModal: (e: React.MouseEvent<HTMLElement>) => void;
  isClicked?: boolean;
  searchBarFocusModal?: string;
  id?: string;
};

type Focus = {
  focus: string;
};

function SearchBar() {
  const { searchBarFocusModal, clickModalFocus, isClicked } = useModal();

  const clickModal = (e: React.MouseEvent<HTMLElement>) => {
    if (!e.currentTarget.dataset.id) return;
    const datasetID: string = e.currentTarget.dataset.id;
    clickModalFocus?.(datasetID);
  };

  return (
    <SearchBarContainer>
      <SearchBarWrap isClicked={isClicked} id="search_bar">
        <Period
          clickModal={clickModal}
          isClicked={isClicked}
          searchBarFocusModal={searchBarFocusModal}
        />
        {searchBarFocusModal === '' && <Divider orientation="vertical" sx={{ height: '60%' }} />}
        <Price
          clickModal={clickModal}
          isClicked={isClicked}
          searchBarFocusModal={searchBarFocusModal}
        />
        {searchBarFocusModal === '' && <Divider orientation="vertical" sx={{ height: '60%' }} />}
        <CommonContainer
          isClicked={isClicked}
          searchBarFocusModal={searchBarFocusModal}
          id="PERSONNEL"
        >
          <Personnel
            clickModal={clickModal}
            isClicked={isClicked}
            searchBarFocusModal={searchBarFocusModal}
          />
          <SearchButton />
        </CommonContainer>
      </SearchBarWrap>
      {searchBarFocusModal !== '' && <FocusModal focus={searchBarFocusModal} />}
    </SearchBarContainer>
  );
}

function FocusModal({ focus }: Focus) {
  switch (focus) {
    case 'CHECK_IN':
    case 'CHECK_OUT':
      return <PeriodModal />;
    case 'PERSONNEL':
      return <PersonnelModal />;
    case 'PRICE':
      return <SetPriceModal />;
    default:
      throw Error();
  }
}

export default SearchBar;
