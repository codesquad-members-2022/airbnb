import { useContext } from 'react';
import {
  SearchingContext,
  SearchingDispatchContext,
} from '@/Contexts/Searching';

export const useSearchBarState = () => {
  const searchBarState = useContext(SearchingContext);

  // 타입가드 -> null or 초기 상태 값이 들어 올수 있어서 사용하는 곳에서 구조분해할당등을 못했지만
  // 런타임 타입 체크로 searchBar의 값이 있는 지 없는 지를 검사할 경우 type은 정해져있는 상태임
  if (!searchBarState) {
    throw new Error('Seraching Bar State Error');
  }

  return searchBarState;
};

export const useSearchBarDispatch = () => {
  const searchBarDispatch = useContext(SearchingDispatchContext);

  if (!searchBarDispatch) {
    throw new Error('Searching Bar Dispatch Error');
  }

  return searchBarDispatch;
};
