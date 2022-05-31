import styled from 'styled-components';
import Barchart from './Canvas';
// const myCanvas = canvasRef.current;
const sampleData = [
  { price: 10000, number: 100 },
  { price: 20000, number: 20 },
  { price: 30000, number: 5 },
  { price: 40000, number: 20 },
  { price: 50000, number: 10 },
];

function PriceRangeModal() {
  return (
    <PriceRangeContainer>
      <Barchart
        color="#808080"
        data={sampleData}
        height="300px"
        width="300px"
        padding="20px"
      />
    </PriceRangeContainer>
  );
}

const PriceRangeContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 300px;
  height: 200px;
  padding: 30px;
  border-radius: 64px;
`;

export default PriceRangeModal;
