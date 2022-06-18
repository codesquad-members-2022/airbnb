import React from 'react';

import styled from 'styled-components';
import BarChart from './BarChart';
import RangeButton from './RangeButton';

const ModalInfo = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.white};
  padding: 52px 64px 64px 64px;
  line-height: 34px;
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
  border-radius: 40px;
`;

const Title = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.black};
  font-style: normal;
  line-height: 23px;
  margin-bottom: 10px;
`;
const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  margin-bottom: 10px;
  color: ${({ theme: { colors } }) => colors.grey1};
`;

const Price = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.xMedium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  font-style: normal;
  line-height: 26px;
`;

const RowLine = styled.div`
  width: 7px;
  height: 26px;
  font-size: ${({ theme: { fontSize } }) => fontSize.xMedium};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  font-style: normal;
  line-height: 26px;
`;

const Average = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
  color: ${({ theme: { colors } }) => colors.grey3};
  font-style: normal;
  line-height: 26px;
  margin-bottom: 10px;
`;

const customStyles = {
  overlay: {
    margin: '0px auto',
    width: '1440px',
    height: '640px',
    backgroundColor: 'transparent',
    boxSizing: 'content-box',
    position: 'absolute',
  },
  content: {
    position: 'absolute',
    top: '166px',
    left: '49%',
    width: '493px',
    height: '364px',
    backgroundColor: 'transparent',
    border: '0px',
  },
};

const GraphWrapper = styled.div`
  position: relative;
`;

function Graph({ coordinate }) {
  return (
    <GraphWrapper>
      <BarChart coordinate={coordinate} />
      <RangeButton />
    </GraphWrapper>
  );
}

export { Graph, customStyles, ModalInfo, Title, PriceWrapper, Price, RowLine, Average };
