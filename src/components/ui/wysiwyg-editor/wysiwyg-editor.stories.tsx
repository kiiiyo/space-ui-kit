import type { Meta, StoryObj } from '@storybook/react';
import StarterKit from '@tiptap/starter-kit';
import { fn } from '@storybook/test';
import { WYSIWYGEditor } from './wysiwyg-editor.component';

const meta = {
  title: 'UI/WYSIWYGEditor',
  component: WYSIWYGEditor,
  args: {
    extensions: [StarterKit],
    defaultContent: {
      type: 'doc',
      content: [],
    },
    onChangeContent: fn(),
  },
  decorators: [
    (Story) => (
      <div className="mx-auto mt-4 max-w-3xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WYSIWYGEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
