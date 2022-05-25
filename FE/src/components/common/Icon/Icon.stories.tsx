import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon, { IconTypes, ICON_NAME } from '@components/common/Icon';

export default {
  title: 'Common/Icon',
  component: Icon,
  args: {
    iconName: ICON_NAME.MENU,
    iconSize: 'MEDIUM',
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (args: IconTypes) => <Icon {...args} />;
