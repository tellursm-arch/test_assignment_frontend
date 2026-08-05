import { makeAutoObservable, runInAction } from 'mobx';
import { messagesApi } from '@api/messages';
import type { MessageT } from '@api/types';
import { MessageItemProps } from '@/components/MessageItem';

const PAGE_SIZE = 50;
const MAX_PAGES_AT_CLIENT = 4;

function formatFullTime(timestamp: string | Date): string {
  const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
  return date.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export type MessagesGroup = {
  date: string,
  senderName: string,
  time: string,
}

export class ChatStore {
  messages: MessageT[] = [];
  isLoading = false;
  hasMoreUp = true;
  hasMoreDown = false;
  currentBottomPage = 1;
  currentTopPage = 1;
  error: string | null = null;
  listStartIndex: number = 100000;

  constructor(initialMessages: MessageT[] = []) {
    this.messages = initialMessages.toReversed();
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get totalMessages(): number {
    return this.messages.length;
  }

  startLoadData(direction: 'up' | 'down') {
    if (direction === 'up') {
      if (!this.hasMoreUp) return;
    } else {
      if (!this.hasMoreDown) return;
    }
    if (this.isLoading) return;
    this.isLoading = true;
    this.error = null;
  }

  async loadMoreMessages(direction: 'up' | 'down') {
    try {
      this.startLoadData(direction);

      const newPage = direction === 'up' ? this.currentTopPage + 1 : this.currentBottomPage - 1

      if (newPage < 1) {
        this.hasMoreDown = false;
        return;
      }

      const response = await messagesApi.getMessages(newPage, PAGE_SIZE);
      console.log(response.messages)

      runInAction(() => {
        if (response.messages.length === 0) {
          if (direction === 'up') {
            this.hasMoreUp = false;
          } else {
            this.hasMoreDown = false;
          }
        } else {

          if (direction === 'up') {

            this.currentTopPage = newPage;
            this.listStartIndex -= response.messages.length;
            this.messages = [...response.messages.toReversed(), ...this.messages];

            if (this.currentTopPage - this.currentBottomPage > MAX_PAGES_AT_CLIENT) {
              this.currentBottomPage +=1;
              this.messages.splice(-PAGE_SIZE);
            }

          } else {

            this.currentBottomPage = newPage;
            this.listStartIndex += response.messages.length;
            this.messages = [...this.messages, ...response.messages.toReversed()];

            if (this.currentTopPage - this.currentBottomPage > MAX_PAGES_AT_CLIENT) {
              this.currentTopPage -=1;
              this.messages.splice(0, PAGE_SIZE);
            }

          }

        }
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        this.error = error instanceof Error ? error.message : 'Ошибка загрузки сообщений';
        console.error('loadMoreMessages error:', error);
      })
    }
  }

  async loadMoreMessagesUp() {
    console.log(this.currentTopPage + 1);
    this.loadMoreMessages('up');
  }

  async loadMoreMessagesDown() {
    console.log(this.currentBottomPage - 1);
    this.loadMoreMessages('down');
  }

  get groupedMessages() { //TODO: Надо вынести в хук, форматирование в сторе не оч
    const result: MessageItemProps[] = [];
    const messages = this.messages;
    let i = 0;

    while (i < messages.length) {
      const current = messages[i];
      const dateKey = new Date(current.timestamp).toLocaleDateString();
      const timeKey = formatFullTime(current.timestamp);

      let j = i + 1;

      while (j < messages.length) {
        const next = messages[j];
        const nextDateKey = new Date(next.timestamp).toLocaleDateString();
        const nextTimeKey = formatFullTime(next.timestamp);

        if (
          nextDateKey !== dateKey ||
          next.sender.name !== current.sender.name ||
          nextTimeKey !== timeKey
        ) {
          break;
        }

        j++;
      }

      for (let k = i; k < j; k++) {
        const message = messages[k];
        const item: MessageItemProps = {
          text: message.text,
          images: message.images,
          id: message.id,
          senderName: k === i ? message.sender.name : undefined,
          senderAvatar: k === i ? message.sender.avatar : undefined,
          time: k === j - 1 ? timeKey : undefined,
        };
        result.push(item);
      }

      i = j;
    }

    return result;
  }

  get groupsCount() {
    return this.groupedMessages.length;
  }

  clearErrors() {
    this.error = null
  }

  getMessage(index: number): MessageT | undefined {
    return this.messages[index]
  }
}