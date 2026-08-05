'use client'

import { ChatHeaderProps } from "./"
import styles from './ChatHeader.module.scss';

const ChatHeader: React.FC<ChatHeaderProps> = (props) => {
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
  )
};

export default ChatHeader;
