import styled from 'styled-components';

export default styled.div`
  display: grid;
  place-items: center;
  width: fit-content;
  height: 76px;
  margin: 0 auto;
  margin-top: 32px;
  border-radius: 60px;
  background-color: #fff;
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
