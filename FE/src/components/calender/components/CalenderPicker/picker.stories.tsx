import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CalenderPicker from 'components/calender/components/CalenderPicker';
import { getTodayDateInfo } from 'components/calender/utils/dataUtils';

export default {
  title: 'Calender/CalenderPicker',
  component: CalenderPicker,
} as ComponentMeta<typeof CalenderPicker>;

const Template: ComponentStory<typeof CalenderPicker> = (args) => <CalenderPicker {...args} />;

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
