import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon from './icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pubdemy/Icons',
  component: Icon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const MenuIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MenuIcon.args = {
  name: 'FaBars',
  type: 'menu',
};
