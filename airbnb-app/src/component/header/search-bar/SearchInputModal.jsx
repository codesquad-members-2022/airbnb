import { useMemo, useContext } from 'react';
import { SearchBarContext } from '@/context/SearchBarProvider';
import SEARCH_INPUT_TEXT from '@/constants/searchBarText';
import Calender from '@calender/Calender';
import Personnel from '@personnel/Personnel';
import Price from '@price/Price';

function SearchInputModal() {
  const { currentInput } = useContext(SearchBarContext);

  const modal = useMemo(() => {
    switch (currentInput) {
      case SEARCH_INPUT_TEXT.CHECKIN.label:
        return <Calender page={2} />;
      case SEARCH_INPUT_TEXT.CHECKOUT.label:
        return <Calender page={2} />;
      case SEARCH_INPUT_TEXT.PRICE.label:
        return <Price />;
      case SEARCH_INPUT_TEXT.PERSONNEL.label:
        return <Personnel />;
      default:
        return null;
    }
  }, [currentInput]);

  return <>{modal}</>;
}

export default SearchInputModal;
