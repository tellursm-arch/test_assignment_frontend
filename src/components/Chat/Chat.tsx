import { ChatHeader } from "../ChatHeader";
import { ChatProps } from "./types";
import styles from './Chat.module.scss';
import { memo } from "react";
import dynamic from "next/dynamic";
import { Spin } from "@gravity-ui/uikit";

const MessagesList = dynamic(() => import('@components/MessagesList'), {
  ssr: false,
  loading: () => { //TODO: унести в отдельную папку компонента
    return (
      <div className={styles.loader}>
        <Spin size='xl'/>
      </div>
    );
  },
});

const Chat: React.FC<ChatProps> = memo((props) => {
  const {
    title,
    subtitle,
    ...other
  } = props;

  return (
    <div className={styles.chatWrapper}>
      <ChatHeader title={title} subtitle={subtitle}/>
      <MessagesList
        {...other}
      />
    </div>
  );
});

Chat.displayName = 'Chat';

export default Chat;
