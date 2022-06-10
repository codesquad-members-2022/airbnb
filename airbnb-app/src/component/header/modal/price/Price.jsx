import { useContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { ModalContainer } from '@/styled-component/ModalContainer';
import { Title } from '@/styled-component/Title';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import PriceSlider from '@price/PriceSlider';
import { priceData } from '@/mock-data/priceData';
import { PriceContext } from '@/context/PriceProvider';

ChartJS.register(...registerables);

const priceGraphData = Object.entries(priceData).map(key => {
  return { x: key[0], y: key[1] };
});

function Price() {
  const theme = useTheme();
  const { priceRange, priceAverage } = useContext(PriceContext);

  const data = {
    datasets: [
      {
        data: priceGraphData,
        borderColor: 'transparent',
        backgroundColor: theme.color.black,
        fill: true,
        lineTension: 0.5,
        pointBackgroundColor: 'transparent',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <>
      <Container>
        <Title>가격 범위</Title>
        <PriceRange>{priceRange}</PriceRange>
        <Average>평균 1박 요금은 ₩{priceAverage}입니다.</Average>
        <Line type="line" height={'150px'} data={data} options={options} />
        <PriceSlider />
      </Container>
    </>
  );
}

const Container = styled(ModalContainer)`
  left: 37%;
  width: 400px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const PriceRange = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.color.grey1};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
`;

const Average = styled.p`
  color: ${({ theme }) => theme.color.grey3};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 25px;
`;

export default Price;
