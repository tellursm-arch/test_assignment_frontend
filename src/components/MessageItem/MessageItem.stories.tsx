import type { Meta, StoryObj } from '@storybook/nextjs';

import { MessageItem, MessageItemProps } from './';
import { messageFromOther, messageFromUser, messageWithImage } from './MessageItem.stub';

const meta = {
  title: 'MessageItem',
  component: MessageItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
  },
} satisfies Meta<MessageItemProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FromUser: Story = {
  args: messageFromUser,
};

export const FromOther: Story = {
  args: messageFromOther
};

export const WithImage: Story = {
  args: messageWithImage
};