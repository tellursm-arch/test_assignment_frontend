'use client';

import { MessagesListProps } from "./types";
import styles from './MessagesList.module.scss';
import { Virtuoso } from "react-virtuoso";
import { MessageItem } from "../MessageItem";
import { Spin } from "@gravity-ui/uikit";
import { memo } from "react";

const Spinner: React.FC = () => (<div className={styles.messagesList__spinner}><Spin/></div>);

const MessagesList: React.FC<MessagesListProps> = memo((props) => {
  const {
    messages,
    onLoadMoreUp,
    onLoadMoreDown,
    groupsCount,
    listStartIndex,
    isLoading,
  } = props;

  return (
    <div
      className={styles.messagesList__wrapper}
    >
      <Virtuoso
        overscan={10000}
        initialTopMostItemIndex={groupsCount}
        firstItemIndex={listStartIndex}
        computeItemKey={(_, item) => item.id}
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
  );
});

MessagesList.displayName = 'ChatHeader';

export default MessagesList;
