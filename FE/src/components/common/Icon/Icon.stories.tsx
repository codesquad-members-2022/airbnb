import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon, { IconPropsTypes, ICON_NAME, ICON_SIZE } from '@components/common/Icon';

export default {
  title: 'Common/Icon',
  component: Icon,
  args: {
    iconName: ICON_NAME.MENU,
    iconSize: 'MEDIUM',
  },
  argTypes: {
    iconName: {
      control: {
        type: 'radio',
      },
      options: [ICON_NAME.MENU, ICON_NAME.USER, ICON_NAME.SEARCH],
    },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: [ICON_SIZE.MEDIUM, ICON_SIZE.LARGE],
    },
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (args: IconPropsTypes) => <Icon {...args} />;
