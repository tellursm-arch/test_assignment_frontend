export type ImageItemT = {
    src: string,
}


export type MessageItemProps = {
  text: string,
  senderAvatar?: string,
  senderName?: string,
  images?: ImageItemT[],

  id: string,
  time?: string,
};