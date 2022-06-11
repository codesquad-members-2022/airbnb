import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import GNB from '@components/GNB';

export default {
  title: 'Components/GNB',
  component: GNB,
} as ComponentMeta<typeof GNB>;

export const Default: ComponentStory<typeof GNB> = () => (
  <BrowserRouter>
    <GNB />
  </BrowserRouter>
);
