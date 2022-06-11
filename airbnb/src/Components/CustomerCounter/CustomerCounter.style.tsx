import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 272px;
  padding: 24px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #c4c4c4;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
`;

export const CounterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid #828282;
  border-radius: 15px;
  &:disabled {
    border: 1px solid #e0e0e0;
  }
`;
export const CountNumber = styled.div`
  width: 50px;
  height: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;

  text-align: center;

  color: #333333;
`;

export const CounterTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #010101;
`;

export const CounterCaption = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #828282;
`;
