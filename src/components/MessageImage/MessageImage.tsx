'use client';

import { memo, useState } from 'react';
import { MessageImageProps } from './';
import styles from './MessageImage.module.scss';
import { Skeleton } from '@gravity-ui/uikit';
import cn from 'classnames';
import Image from 'next/image';

export const MessageImage: React.FC<MessageImageProps> = memo((props) => {
  const [currentSrc, setCurrentSrc] = useState<string>(props.src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Skeleton
          style={{ width: '100%', height: 280, borderRadius: '8px' }}
        />
      )}
      <Image
        src={currentSrc}
        alt={props.alt || ''}
        width={400}
        height={300}
        className={cn(styles.messageImage__image, isLoading ? styles.messageImage__hide : styles.messageImage__visible)}
        onLoad={() => {
          setIsLoading(false);
        }}
        onError={() => {
          setIsLoading(false);
          setCurrentSrc('/image.png');
        }}
      />
    </>
  );
});

MessageImage.displayName = 'MessageImage';