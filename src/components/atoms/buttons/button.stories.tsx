import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button';
import Icon from '../icons/icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pubdemy/Buttons',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// export const PrimaryButton = () => (
//   <Button buttonType="primary">Sign up</Button>
// );

// export const SecondaryButton = () => (
//   <Button buttonType="secondary">Log in</Button>
// );

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  primary: true,
  children: 'Sign up',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  primary: false,
  children: 'Log in',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  primary: false,
  children: <Icon name="BsGlobe" />,
};
