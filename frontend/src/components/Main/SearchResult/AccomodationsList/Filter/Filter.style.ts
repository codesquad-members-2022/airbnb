import styled from "@emotion/styled";

const Wrapper = styled.div`
  ul,
  li {
    list-style: none;
  }

  .search-filter-list {
    display: flex;
  }

  .search-filter-item {
    &:not(:last-child)::after {
      content: "•";
      display: inline-block;
      margin: 0 0.5rem;
    }
  }
`;

export default Wrapper;
