export type ImageItemT = {
    src: string,
    alt?: string,
}


export type MessageItemProps = {
  text: string,
  senderAvatar?: string,
  senderAvatarText?: string,
  senderName?: string,
  images?: ImageItemT[],

  id: string,
  time?: string,
};