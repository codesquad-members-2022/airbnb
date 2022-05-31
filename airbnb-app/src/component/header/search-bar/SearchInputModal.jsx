import { useMemo, useContext } from 'react';
import { SearchBarContext } from '@component/header/search-bar/SearchBarProvider';
import SEARCH_INPUT_TEXT from '@/constants/searchBarText';
import Calender from '@/component/header/calender/Calender';

function SearchInputModal() {
  const { currentInput } = useContext(SearchBarContext);

  const modal = useMemo(() => {
    switch (currentInput) {
      case SEARCH_INPUT_TEXT.CHECKIN.label:
        return <Calender page={2} />;
      case SEARCH_INPUT_TEXT.CHECKOUT.label:
        return <Calender page={2} />;
      case SEARCH_INPUT_TEXT.PRICE.label:
        break;
      case SEARCH_INPUT_TEXT.PERSONNEL.label:
        break;
      default:
        return null;
    }
  }, [currentInput]);

  return <>{modal}</>;
}

export default SearchInputModal;
