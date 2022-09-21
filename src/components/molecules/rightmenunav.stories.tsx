import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Rightmenunav from './rightmenunav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pubdemy/Menu',
  component: Rightmenunav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Rightmenunav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Rightmenunav> = (args) => (
  <Rightmenunav {...args} />
);

export const RightmenunavPreview = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RightmenunavPreview.args = {
  primary: true,
  label: 'Rightmenunav',
};
