import { useContext } from "react";

import { SearchBarStateContext } from "contexts/contexts";

import SearchBarContainer from "./SearchBar.style";
import SelectItemArea from "./SelectItemArea/SelectItemArea";

const SearchBar = (): JSX.Element => {
  // TODO:
  // 첫 화면, 검색결과 화면 모두 같은 SearchBar를 공유함
  // 검색하기 위해서 SelectItem들을 선택할때는 해당 SelectItemArea의 state로 저장되지만
  // 검색버튼을 눌러 이동된 후에는 주소창의 쿼리문을 통해 현재 검색했던 내용을 불러와야함.
  // 이렇게 하지 않으면 검색결과화면에서 뒤로가기 버튼으로 첫 화면으로 이동하였을때에도 SearchBar에 현재 선택한 사항이 유지됨
  // (실제 에어비앤비는 같은 방법으로 초기화면으로 돌아간 경우 SearchBar가 초기화되어 표시된다. 👉 이렇게 표시하기 위해)

  const { isSearchBarFullSize } = useContext(SearchBarStateContext)!;

  return (
    <SearchBarContainer isSearchBarFullSize={isSearchBarFullSize}>
      <SelectItemArea />
    </SearchBarContainer>
  );
};

export default SearchBar;
