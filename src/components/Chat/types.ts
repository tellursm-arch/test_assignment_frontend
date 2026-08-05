import { MessageItemProps } from "../MessageItem";

export type ChatProps = {
    title: string;
    subtitle: string;

    isLoading: boolean;
    groupsCount: number;
    listStartIndex: number;
   
    messages: MessageItemProps[];
    onLoadMoreUp: () => void;
    onLoadMoreDown: () => void;
}
