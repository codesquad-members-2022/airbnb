import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import GNB, { GNB_TYPE, GNBTypes } from '@components/GNB';

export default {
  title: 'Components/GNB',
  component: GNB,
  args: {
    gnbType: GNB_TYPE.MAIN,
  },
  argTypes: {
    gnbType: {
      control: {
        type: 'radio',
      },
      options: [GNB_TYPE.MAIN, GNB_TYPE.DETAIL],
    },
  },
} as ComponentMeta<typeof GNB>;

export const Default: ComponentStory<typeof GNB> = (args: GNBTypes) => (
  <BrowserRouter>
    <GNB {...args} />
  </BrowserRouter>
);
