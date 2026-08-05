import type { Meta, StoryObj } from '@storybook/nextjs';

import { Chat, ChatProps } from '.';
import { defaultChat } from './Chat.stub';

const meta = {
  title: 'Chat',
  component: Chat,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
  },
} satisfies Meta<ChatProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...defaultChat,
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    ...defaultChat,
    isLoading: true,
  },
};
