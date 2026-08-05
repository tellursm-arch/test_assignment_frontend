'use client'

import { ChatHeader } from "../ChatHeader";
import { ChatProps } from "./"
import styles from './Chat.module.scss';
import { Virtuoso } from "react-virtuoso";
import { MessageItem } from "../MessageItem";
import { Spin } from "@gravity-ui/uikit";

const Spinner: React.FC = () => (<div className={styles.chatWrapper__spinner}><Spin/></div>)

const Chat: React.FC<ChatProps> = (props) => {
  const {
    messages,
    onLoadMoreUp,
    onLoadMoreDown,
    groupsCount,
    listStartIndex,
    isLoading,
    title,
    subtitle,
  } = props;

  return (
    <div className={styles.chatWrapper}>
      <ChatHeader title={title} subtitle={subtitle}/>
      <div
        className={styles.chatWrapper__messagesWrapper}
      >
        <Virtuoso
          initialTopMostItemIndex={groupsCount}
          firstItemIndex={listStartIndex}
          atTopThreshold={500}
          atBottomThreshold={500}
          data={messages}
          startReached={onLoadMoreUp}
          endReached={onLoadMoreDown}
          itemContent={(_, item) => (
            <MessageItem
              {...item}
              key={item.id}
            />
          )}
          components={{
            Header: isLoading ? Spinner : undefined,
            Footer: isLoading ? Spinner : undefined,
          }}
        />
      </div>
    </div>
  );
};

export default Chat;
