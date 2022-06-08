import styled from 'styled-components';

export const StyledPersonnel = styled.div`
  & + & {
    margin-top: 24px;
  }
`;

export const StyledSection = styled.div`
  display: flex;

  section {
    width: 80px;
    margin: 0px 80px 0px 0px;
    h3 {
      font-weight: 700;
      font-size: 16px;
      line-height: 23px;
      color: #010101;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #828282;
    }
  }
`;

export const PersonnelController = styled.div`
  display: flex;
  width: 116px;
  align-items: center;
  p {
    margin: 0px 19px;
  }
  button {
    padding: 0;
    background: transparent;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const MinusButton = styled.button`
  path {
    ${({ count, min }) => (count || 0) === min && `stroke: #e0e0e0;`}
  }
`;

export const PlusButton = styled.button`
  path {
    ${({ count, max }) => count === max && `stroke: #e0e0e0;`}
  }
`;

export const SplitLine = styled.div`
  width: 272px;
  height: 1px;
  background: #e0e0e0;
  margin-top: 24px;
`;
