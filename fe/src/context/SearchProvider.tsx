import React, { useContext, createContext, useReducer, Dispatch } from 'react';

interface PeriodType {
  checkIn: number;
  checkOut: number;
}

interface PriceType {
  minPrice: number;
  maxPrice: number;
}

interface PersonnelType {
  adult: number;
  teenager: number;
  child: number;
}

interface SearchPropsType {
  title: string | string[];
  defaultValue: string;
  value: PeriodType | PriceType | PersonnelType;
}

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
          }
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
          ...searches.personnel, value: { adult: value.adult, teenager: value.teenager, child: value.child },
        }
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
      checkIn: 0,
      checkOut: 0,
    },
  },
  price: {
    title: '요금',
    defaultValue: '금액대 설정',
    value: {
      minPrice: 0,
      maxPrice: 0,
    },
  },
  personnel: {
    title: '인원',
    defaultValue: '게스트 추가',
    value: {
      adult: 0,
      teenager: 0,
      child: 0,
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
  if (!addSearch) throw new Error('Cannot find SearchProvider');
  return addSearch;
}
