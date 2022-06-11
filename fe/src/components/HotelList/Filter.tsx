import styled from 'styled-components';

import { usePriceState } from 'hooks/usePrice';
import { usePersonnelState } from 'hooks/usePersonnel';
import { usePeriodState } from 'hooks/usePeriod';

type DataProps = {
  data: [] | undefined;
};

function FilterText({ data }: DataProps) {
  const { priceRange, priceRangeText } = usePriceState();
  const { counter, personnelCounterText } = usePersonnelState();
  const { periodText } = usePeriodState();

  const hotelsText = `${data ? data.length : ''}개의 숙소`;

  const checkedPeriodText = periodText === '일정 입력' ? '' : periodText;

  const priceText = priceRange.min && priceRange.max ? priceRangeText : '';

  const personnelText = counter.adult ? personnelCounterText : '';

  const filterText = [hotelsText, checkedPeriodText, priceText, personnelText]
    .filter((el) => el !== '')
    .join('ㆍ');

  return <Text>{filterText}</Text>;
}

export const Text = styled.span`
  ${({ theme }) => theme.fontStyles.normal12px};
`;

export default FilterText;
