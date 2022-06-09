import Chart from '@components/ChartSlider/Chart';
import RangeSlider from '@components/ChartSlider/RangeSlider';
import { CANVAS_SIZE, CHART_TYPE } from '@components/SearchBar/constants';
import { usePriceState } from '@lib/hooks/useContext';

const ChartSlider = () => {
  const { priceRange } = usePriceState();

  return (
    <>
      <Chart type={CHART_TYPE.BAR} rangeData={priceRange} {...CANVAS_SIZE} />
      <RangeSlider />
    </>
  );
};

export default ChartSlider;
