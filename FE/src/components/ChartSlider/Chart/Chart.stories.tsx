import Chart, { ChartPropsTypes } from '@components/ChartSlider/Chart';
import { CANVAS_SIZE, CHART_TYPE } from '@components/SearchBar/constants';
import { rangeData } from '@data';

export default {
  title: 'ChartSlider/Chart',
  component: Chart,
  args: {
    type: CHART_TYPE.LINE,
    rangeData: rangeData,
    canvasWidth: CANVAS_SIZE.canvasWidth,
    canvasHeight: CANVAS_SIZE.canvasHeight,
  },
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: [CHART_TYPE.LINE, CHART_TYPE.BAR],
    },
  },
};

export const Default = (args: ChartPropsTypes) => <Chart {...args} />;
