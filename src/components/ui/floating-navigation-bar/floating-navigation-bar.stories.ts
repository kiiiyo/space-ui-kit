import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FloatingNavigationBar } from './floating-navigation-bar.component';

const meta = {
  title: 'UI/FloatingNavigationBar',
  component: FloatingNavigationBar,
  args: { onClick: fn() },
} satisfies Meta<typeof FloatingNavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'Button',
  },
};
