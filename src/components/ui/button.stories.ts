import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/components/ui/button';

const meta = {
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default {
  titl: 'UI/Button',
  ...meta,
};

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Button',
  },
};
