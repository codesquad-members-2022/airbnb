import Chart from '@components/ChartSlider/Chart';
import RangeSlider from '@components/ChartSlider/RangeSlider';
import { CANVAS_SIZE, CHART_TYPE } from '@components/SearchBar/constants';
import { rangeData } from '@data';

const ChartSlider = () => {
  return (
    <>
      <Chart type={CHART_TYPE.BAR} rangeData={rangeData} {...CANVAS_SIZE} />
      <RangeSlider />
    </>
  );
};

export default ChartSlider;
