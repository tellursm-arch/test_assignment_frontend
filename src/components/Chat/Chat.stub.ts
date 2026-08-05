import { defaultHeader } from "../ChatHeader/ChatHeader.stub";
import { MessageItemProps } from "../MessageItem";
import { ChatProps } from "./types";

const defaultMessagesList: MessageItemProps[] = [
  {
    id: "msg-30149",
    text: "Atque calco conitor culpa.",
    senderName: "Juana Hessel",
    senderAvatar: "https://picsum.photos/seed/OSqRz/200/150",
    time: "2026-08-05T11:02:32.856Z"
  },
  {
    id: "msg-30150",
    text: "Sit demulceo tutamen audentia facere optio tantum. Umerus eveniet caveo quo ulterius super.",
    senderName: "Juana Hessel",
    senderAvatar: "https://picsum.photos/seed/OSqRz/200/150",
    time: "2026-08-05T11:02:29.856Z"
  },
  {
    id: "msg-95083",
    text: "Beneficium thesaurus velit administratio solvo damnatio saepe temporibus. Amo sub caput aveho aranea. Conforto neque auxilium ulciscor corrumpo quo clarus maiores explicabo vita.",
    senderName: "Lawrence Thompson",
    senderAvatar: "https://picsum.photos/seed/pyXxk/200/150",
    time: "2026-08-05T10:58:36.368Z"
  },
];

export const defaultChat: ChatProps = {
  ...defaultHeader,
  messages: defaultMessagesList,
  isLoading: false,
  groupsCount: 0,
  listStartIndex: 0,
  onLoadMoreUp: () => undefined,
  onLoadMoreDown: () => undefined,
};
