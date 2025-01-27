import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '@/components/ui/button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    variant: '',
    size: '',
    children: 'Click me',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'default',
          'outline',
          'secondary',
          'ghost',
          'link',
          'destructive',
          'navigation',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon', 'link'],
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click me',
  },
};

export const Navigation: Story = {
  args: {
    variant: 'navigation',
    children: 'Click me',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Click me',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Click me',
  },
};
