import { messagesApi } from '@api/messages';
import { ChatStoreProvider } from '@store/ChatStoreContext';
import { MessageT } from '@api/index';
import { ChatSmart } from './ChatSmart';

export default async function Page() {
  let initialMessages: MessageT[] = [];
  try {
    const data = await messagesApi.getMessages(1, 200);
    initialMessages = data.messages;
  } catch (error) {
    console.error('messagesApi.getMessages error: ', error);
  };

  return (
    <ChatStoreProvider initialMessages={initialMessages}>
      <ChatSmart/>
    </ChatStoreProvider>
  );
}
