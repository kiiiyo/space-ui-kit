import type { Meta, StoryObj } from '@storybook/react';
import { DashboardLayout } from './dashboard-layout.component';

const meta = {
  title: 'Layout/DashboardLayout',
  component: DashboardLayout,
} satisfies Meta<typeof DashboardLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: null,
  },
};
