import type { Meta, StoryObj } from '@storybook/nextjs';

import { ChatHeader, ChatHeaderProps } from '.';
import { defaultHeader } from './ChatHeader.stub';

const meta = {
  title: 'ChatHeader',
  component: ChatHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
  },
} satisfies Meta<ChatHeaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: defaultHeader,
};
