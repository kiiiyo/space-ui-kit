import type { Meta, StoryObj } from '@storybook/react';
import { PageNavigation } from './page-navigation.component';

const meta = {
  title: 'Layout/DashboardLayout/PageNavigation',
  component: PageNavigation,
  decorators: [
    (Story) => (
      <div style={{ width: '24rem', padding: '8px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PageNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: 'Page Navigation Title',
    pageNavigations: [
      {
        link: '/',
        text: 'Page Name 1',
        current: true,
      },
      {
        link: '/',
        text: 'Page Name 2',
        current: false,
      },
      {
        link: '/',
        text: 'Page Name 3',
        current: false,
      },
    ],
  },
};
