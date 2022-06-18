import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Calender from 'components/calender/components/Calender';
import { getTodayDateInfo } from 'components/calender/utils/dataUtils';

export default {
  title: 'Calender/Calender',
  component: Calender,
} as ComponentMeta<typeof Calender>;

const Template: ComponentStory<typeof Calender> = (args) => <Calender {...args} />;

const today = getTodayDateInfo();

export const Current = Template.bind({});
Current.args = {
  count: 1,
};
Current.storyName = 'Current Calender';

export const Next = Template.bind({});
Next.args = {
  year: today.year,
  month: today.month + 1,
  count: 2,
};
Next.storyName = 'Next Calender';

export const Prev = Template.bind({});
Prev.args = {
  year: today.year,
  month: today.month - 1,
  count: 3,
};
Prev.storyName = 'Prev Calender';
