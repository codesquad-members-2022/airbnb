import React, { useContext, createContext, useReducer, Dispatch } from 'react';
import { PeriodType, PriceType, PersonnelType, SearchPropsType } from 'components/SearchBar/types';

interface SearchType {
  period: SearchPropsType;
  price: SearchPropsType;
  personnel: SearchPropsType;
}

type ActionType =
  | {
    type: 'SET_PERIOD';
    value: PeriodType;
  }
  | {
    type: 'SET_PRICE';
    value: PriceType;
  }
  | {
    type: 'SET_PERSONNEL';
    value: PersonnelType;
  };

function searchReducer(searches: SearchType, action: ActionType): SearchType {
  const { type, value } = action;
  switch (type) {
    case 'SET_PERIOD':
      return {
        ...searches,
        period: {
          ...searches.period,
          value: {
            checkIn: value.checkIn,
            checkOut: value.checkOut,
          },
        },
      };
    case 'SET_PRICE':
      return {
        ...searches,
        price: { ...searches.price, value: { minPrice: value.minPrice, maxPrice: value.maxPrice } },
      };
    case 'SET_PERSONNEL':
      return {
        ...searches,
        personnel: {
          ...searches.personnel,
          value: { adult: value.adult, teenager: value.teenager, child: value.child },
        },
      };
    default:
      throw new Error('Unhandled action');
  }
}

type DispatchType = Dispatch<ActionType>;

export const SearchContext = createContext<SearchType | null>(null);
export const AddSearchContext = createContext<DispatchType | null>(null);

const initSearch = {
  period: {
    title: ['체크인', '체크아웃'],
    defaultValue: '날짜입력',
    value: {
      checkIn: undefined,
      checkOut: undefined,
    },
  },
  price: {
    title: '요금',
    defaultValue: '금액대 설정',
    value: {
      minPrice: undefined,
      maxPrice: undefined,
    },
  },
  personnel: {
    title: '인원',
    defaultValue: '게스트 추가',
    value: {
      adult: undefined,
      teenager: undefined,
      child: undefined,
    },
  },
};

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searches, addSearch] = useReducer(searchReducer, initSearch);

  return (
    <SearchContext.Provider value={searches}>
      <AddSearchContext.Provider value={addSearch}>{children}</AddSearchContext.Provider>
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const search = useContext(SearchContext);
  if (!search) throw new Error('Cannot find SearchProvider');
  return search;
}

export function useAddSearch() {
  const addSearch = useContext(AddSearchContext);
  if (!addSearch) throw new Error('Cannot find AddSearchProvider');
  return addSearch;
}
