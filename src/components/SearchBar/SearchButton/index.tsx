import SEARCH_ICON from "@assets/search-icon.svg";
import Icon from "@components/common/Icon";
import { useCalendarState } from "@contexts/CalendarProvider";
import { useInputGuestState } from "@contexts/InputGuestProvider";
import { usePriceState } from "@contexts/PriceProvider";

import * as S from "./style";

const SearchButton = () => {
  const { checkIn, checkOut } = useCalendarState();
  const { priceRange } = usePriceState();
  const { adult, child, baby } = useInputGuestState();

  const handleSearchRooms = () => {
    console.log("검색"); // 컨텍스트들의 state를 취합해서 쿼리문 만들어서 fetch요청
  };

  return (
    <S.SearchButton onClick={handleSearchRooms}>
      <Icon iconName={SEARCH_ICON} iconSize="base" />
    </S.SearchButton>
  );
};

export default SearchButton;
