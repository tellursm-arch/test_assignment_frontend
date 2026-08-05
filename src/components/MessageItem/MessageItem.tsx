'use client'

import { memo } from 'react';
import type { MessageItemProps } from './';
import styles from './MessageItem.module.scss';
import { Avatar } from '@gravity-ui/uikit';
import cn from 'classnames';
import { MessageImage } from '../MessageImage';

export const MessageItem: React.FC<MessageItemProps> = memo((props) => {
  const {
    text,
    images,
    time,
    senderAvatar,
    senderName
  } = props;

  return (
    <div className={styles.messageItem__container}>
      <div className={styles.messageItem__avatarSlot}>
        {senderAvatar ? <Avatar imgUrl={senderAvatar}/> : null}
      </div>
      <div
        className={cn(
          styles.messageItem,
          styles.messageItem__fromSystem,
          senderAvatar ? styles.messageItem__withAvatar : null
        )}
      >
        {senderName ?
          <div className={styles.messageItem__senderName}>
            {senderName}
          </div> : null
        }
        {text}

        {images ?
          <div className={styles.messageItem__imagesContainer}>
            {images.map(image => (
              <MessageImage key={image.src} {...image} />
            ))}
          </div> : null
        }

        {time ? <div className={styles.messageItem__timeLabel}>{time}</div> : null}
      </div>
    </div>
  )
});

MessageItem.displayName = 'MessageItem';
