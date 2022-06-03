import React, { useContext, useReducer } from 'react';
import { Container, SearchBtnWrap } from '@components/SearchBar/index.style';
import { ReservationInfoContext } from '@contexts/ReservationInfoProvider';
import IconButton from '@components/common/IconButton';
import SearchInputButton from '@components/SearchBar/SearchInputButton';
import PeriodModal from '@components/Modal/PeriodModal';
import PriceModal from '@components/Modal/PriceModal';
import { PERSONS_TEXTS } from '@/constants';

const searchInputButtonsInfo = [
  {
    name: '체크인',
    label: '체크인',
    placeholder: '날짜 입력',
    searchName: 'checkin',
    hasCloseBtn: false,
    hasBorderLeft: false
  },
  {
    name: '체크아웃',
    label: '체크아웃',
    placeholder: '날짜 입력',
    searchName: 'checkout',
    hasBorderLeft: false
  },
  { name: '요금', label: '요금', placeholder: '금액대 설정', searchName: 'price' },
  { name: '인원', label: '인원', placeholder: '게스트 추가', searchName: 'persons' }
];

const modalReducer = (selectedModal: React.ReactElement, action: { type: string }) => {
  switch (action.type) {
    case 'checkin':
      return <PeriodModal />;
    case 'checkout':
      return <PeriodModal />;
    case 'price':
      return <PriceModal />;
    default:
      return new Error("'type'이 없습니다.");
  }
};

function SearchBar() {
  const { reservationInfo } = useContext(ReservationInfoContext);
  const [selectedModal, dispatchSelectedModal] = useReducer(modalReducer, null);

  const getSearchModal = (searchName: string) => {
    dispatchSelectedModal({ type: searchName });
  };

  const getReservationPersonnelText = () => {
    const reservationPersonnelTexts = Object.keys(reservationInfo.persons).reduce(
      (text, ageGroup, idx) => {
        const numberForAgeGroup =
          reservationInfo.persons[ageGroup as keyof typeof reservationInfo.persons];

        return (
          text + (numberForAgeGroup > 0 ? `${PERSONS_TEXTS[idx]} ${numberForAgeGroup}명, ` : '')
        );
      },
      ''
    );

    return reservationPersonnelTexts;
  };

  return (
    <>
      <Container>
        {searchInputButtonsInfo.map(
          ({ name, label, placeholder, searchName, hasCloseBtn, hasBorderLeft }, idx) => (
            <SearchInputButton
              key={idx}
              name={name}
              label={label}
              placeholder={placeholder}
              searchName={searchName}
              hasCloseBtn={hasCloseBtn}
              hasBorderLeft={hasBorderLeft}
              getSearchModal={getSearchModal}
            />
          )
        )}
        <SearchBtnWrap>
          <IconButton icon="search" />
        </SearchBtnWrap>
      </Container>
      {selectedModal}
    </>
  );
}

export default SearchBar;
