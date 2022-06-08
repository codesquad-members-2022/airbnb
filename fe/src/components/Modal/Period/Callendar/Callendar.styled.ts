import styled from 'styled-components';

export const CallendarTitle = styled.h1`
  font-weight: 700;
  font-size: 16px;
  margin: 0px 60px;
  width: max-content;
`;

export const StyledCallendar = styled.table`
  font-size: 18px;
  width: 336px;
  height: 336px;
  h1 {
    margin-left: auto;
    margin-right: auto;
  }
  th {
    vertical-align: middle;
  }
  td {
    font-weight: 400;
    font-size: 12px;
    width: 40px;
    height: 40px;
    vertical-align: middle;
    border-radius: 50%;
  }
`;

export const DayOfWeek = styled.td`
  color: #828282;
`;

export const PastDay = styled.td`
  color: #bdbdbd; ;
`;

export const FutureDay = styled.td`
  &:hover {
    background-color: #333;
    cursor: pointer;
  }
  ${({ isCheckDate, isPeriod }) => {
    let color = '';
    if (isPeriod) color = '#F5F5F7';
    if (isCheckDate) color = '#333';
    return `background-color:${color}; `;
  }}
`;
