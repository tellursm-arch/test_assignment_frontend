'use client';

import { memo } from "react";
import { ChatHeaderProps } from "./";
import styles from './ChatHeader.module.scss';

const ChatHeader: React.FC<ChatHeaderProps> = memo((props) => {
  const {
    title,
    subtitle
  } = props;

  return (
    <div className={styles.header}>
      <span className={styles.header__title}>
        {title}
      </span>

      {subtitle && <span className={styles.header__subtitle}>{subtitle}</span>}
    </div>
  );
});

ChatHeader.displayName = 'ChatHeader';

export default ChatHeader;
