import React, { ComponentProps } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input } from '@/components/ui/input';

export default {
  title: 'UI/Input',
  component: Input,
} as Meta;

const Template: StoryFn<ComponentProps<typeof Input>> = (args) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text',
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'Sample text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled input',
};
