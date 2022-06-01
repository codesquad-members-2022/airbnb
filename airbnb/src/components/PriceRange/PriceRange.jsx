import BarChart from './Canvas';

const sampleData = [
  { price: 10000, number: 100 },
  { price: 20000, number: 20 },
  { price: 30000, number: 5 },
  { price: 40000, number: 20 },
  { price: 50000, number: 10 },
];

function PriceRangeModal() {
  return (
    <>
      <BarChart
        color="#808080"
        data={sampleData}
        height="300px"
        width="300px"
        padding="20px"
      />
    </>
  );
}

export default PriceRangeModal;
