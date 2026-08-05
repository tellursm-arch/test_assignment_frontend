'use client'

import { useChatStore } from '@/store/ChatStoreContext';
import { Chat } from '@/components/Chat';
import { observer } from 'mobx-react-lite';

export const ChatSmart: React.FC = observer(() => {
  const store = useChatStore();

  if (!store) return null;

  return (
    <Chat
        title={'Чатик'}
        subtitle={'В сети не был'}
        messages={store?.groupedMessages}
        isLoading={store.isLoading}
        onLoadMoreUp={store.loadMoreMessagesUp}
        onLoadMoreDown={store.loadMoreMessagesDown}
        groupsCount={store.groupsCount}
        listStartIndex={store.listStartIndex}
    />
  );
});
