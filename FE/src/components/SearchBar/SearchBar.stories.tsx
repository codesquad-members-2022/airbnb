import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar, { SearchBarPropsTypes } from '@components/SearchBar';
import { SEARCH_BAR_SIZE } from '@components/SearchBar/constants';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  args: {
    size: SEARCH_BAR_SIZE.LARGE,
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: [SEARCH_BAR_SIZE.SMALL, SEARCH_BAR_SIZE.LARGE],
    },
  },
} as ComponentMeta<typeof SearchBar>;

export const Default: ComponentStory<typeof SearchBar> = (args: SearchBarPropsTypes) => (
  <SearchBar {...args} />
);
