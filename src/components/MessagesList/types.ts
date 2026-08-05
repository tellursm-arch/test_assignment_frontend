import { MessageItemProps } from "../MessageItem";

export type MessagesListProps = {
    isLoading: boolean;
    groupsCount: number;
    listStartIndex: number;
    
    messages: MessageItemProps[];
    onLoadMoreUp: () => void;
    onLoadMoreDown: () => void;
}
