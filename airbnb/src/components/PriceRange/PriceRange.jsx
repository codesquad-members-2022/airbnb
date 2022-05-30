import styled from 'styled-components';
import myBarchart from './Canvas';

function PriceRangeModal() {
  return (
    <PriceRangeContainer>
      <myBarchart />
    </PriceRangeContainer>
  );
}

const PriceRangeContainer = styled.div`
  background: ${({ theme }) => theme.colors.green};
  width: 300px;
  height: 300px;
`;

export default PriceRangeModal;
