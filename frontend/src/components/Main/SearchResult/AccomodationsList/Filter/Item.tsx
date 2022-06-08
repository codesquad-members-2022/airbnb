import Wrapper from "./Filter.style";

// TODO: count 추후 변경 필요

const Item = ({
  count = 1,
  queryDataList,
}: {
  count?: number;
  queryDataList: string[][];
}) => {
  return (
    <Wrapper>
      <ul className="search-filter-list">
        {/* count부터 처리 */}
        <li key="count" className="search-filter-item">
          {count}개 이상의 숙소
        </li>
        {/* queryDataList처리 */}
        {queryDataList.map(([key, val]) => (
          <li key={key} className="search-filter-item">
            {val}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Item;
