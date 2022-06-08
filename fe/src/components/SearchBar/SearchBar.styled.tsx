import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: grid;
  place-items: center;
  width: fit-content;
  height: 76px;
  margin: 0 auto;
  margin-top: 32px;
  border-radius: 60px;
  background-color: ${({ isActive }) => (isActive ? '#eee' : '#fff')};
  z-index: 1;
  position: relative;

  span {
    display: none;
  }

  ul,
  li {
    display: flex;
    align-items: center;
  }

  li {
    height: 76px;
    border-radius: 60px;
    &:hover {
      cursor: pointer;
    }
  }

  section {
    padding-left: 24px;
    h3 {
      font-weight: 700;
      font-size: 12px;
      color: #010101;
    }

    p {
      margin-top: 10px;
      font-weight: 400;
      font-size: 16px;
      color: #4f4f4f;
    }
  }
`;

export const SplitLine = styled.div`
  width: 1px;
  height: 44px;
  background: #e0e0e0;
`;

export const StyledLi = styled.li`
  padding-left: 10px;
  width: ${({ width }) => width}px;
  max-width: 290px;
  section {
    width: 112px;
  }
  button {
    margin-left: auto;
  }
  position: relative;
  ${({ isActive }) =>
    isActive &&
    `
  background-color:#fff;
  box-shadow: 0px 0px 10px 3px #ebebeb;
  `}
`;
