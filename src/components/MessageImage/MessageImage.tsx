'use client';

import { memo } from 'react';
import { MessageImageProps } from './';
import styles from './MessageImage.module.scss';
import Image from 'next/image';

export const MessageImage: React.FC<MessageImageProps> = memo((props) => {
  return (
    <Image
      src={props.src}
      alt="TODO"
      width={400}
      height={300}
      className={styles.messageImage}
    />
  );
});

MessageImage.displayName = 'MessageImage';