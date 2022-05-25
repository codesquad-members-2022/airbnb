import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import Header, { HeaderTypes } from '@components/Header';

export default {
  title: 'Header/Header',
  component: Header,
  args: {
    headerType: 'main',
  },
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (args: HeaderTypes) => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);
