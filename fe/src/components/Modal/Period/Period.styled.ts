import styled from 'styled-components';

export default styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit,minmax(50%,auto));
  ${({ callendarNum }) => {
    const maxNumOfLine = 2;
    return (
      callendarNum > maxNumOfLine &&
      `
  overflow-y: scroll;
  height: 35vh;
  `
    );
  }}

  button {
  padding: 0;
  background: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }

`;
