export interface ImageT {
    src: string,
}

interface SenderT {
    name: string,
    avatar: string,
}

interface MessageContentT {
  text: string,
  sender: SenderT,
  images?: ImageT[]
}

interface MessageMetaDataT extends MessageContentT {
  id: string,
  timestamp: string,
}

export type MessageT = MessageContentT & MessageMetaDataT;

export type MessageBeingSentT = MessageContentT;

export interface GetMessagesResponseT {
  messages: MessageT[],
  total: number,
  hasMore: boolean,
}
