import React from 'react';
import styled from 'styled-components';
import { getSearchParams } from '../../util/urlUtil';
import { getMonthDateString } from '../../util/calenderUtil';

const MiniSearchBar = ({ onClick }) => {
  const getPeriodString = () => {
    const checkInValue = getSearchParams('checkIn');
    const checkOutValue = getSearchParams('checkOut');
    if (!checkInValue && !checkOutValue) return '날짜 선택';
    const checkInString = checkInValue ? getMonthDateString(new Date(checkInValue)) : '';
    const checkOutString = checkOutValue ? getMonthDateString(new Date(checkOutValue)) : '';
    return `${checkInString}~${checkOutString}`;
  };

  const getPriceString = () => {
    const minPriceValue = getSearchParams('minPrice');
    const maxPriceValue = getSearchParams('maxPrice');
    if (!minPriceValue && !maxPriceValue) return '금액 범위 설정';
    const minPriceString = minPriceValue ? `₩${Number(minPriceValue).toLocaleString()}` : '';
    const maxPriceString = maxPriceValue ? `₩${Number(maxPriceValue).toLocaleString()}` : '';
    return `${minPriceString}~${maxPriceString}`;
  };

  const getPersonnelString = () => {
    const personnelValue = getSearchParams('personnel');
    if (!personnelValue) return '인원 설정';
    const personnelString = personnelValue ? `게스트 ${personnelValue}명 ` : '';
    return personnelString;
  };

  return (
    <MiniSearchBarContainer onClick={onClick}>
      <ItemContainer>{getPeriodString()}</ItemContainer>
      <ItemDivider />
      <ItemContainer>{getPriceString()}</ItemContainer>
      <ItemDivider />
      <ItemContainer>{getPersonnelString()}</ItemContainer>
    </MiniSearchBarContainer>
  );
};

export default MiniSearchBar;

const MiniSearchBarContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('row', 'center', 'space-around')}
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 30px;
  padding: 0px 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 15px;
`;

const ItemDivider = styled.div`
  width: 1px;
  height: 20px;
  background: ${({ theme }) => theme.colors.grey};
`;
