import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Month from 'components/calender/components/Month';
import { getCurrentMonthInfo, getTodayDateInfo } from 'components/calender/utils/dataUtils';

export default {
  title: 'Calender/Month',
  component: Month,
} as ComponentMeta<typeof Month>;

const Template: ComponentStory<typeof Month> = (args) => <Month {...args} />;

const today = getTodayDateInfo();
const currentMonthInfo = getCurrentMonthInfo(today.year, today.month);

export const Current = Template.bind({});
Current.args = {
  year: today.year,
  month: today.month,
  ...currentMonthInfo,
};
Current.storyName = 'Current Month';

export const Prev = Template.bind({});
Prev.args = {
  year: today.year,
  month: today.month - 1,
};
Prev.storyName = 'Prev Month';

export const Next = Template.bind({});
Next.args = {
  year: today.year,
  month: today.month + 1,
};
Next.storyName = 'Next Month';
