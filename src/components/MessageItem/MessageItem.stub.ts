import { MessageItemProps } from "./types";

export const messageFromUser: MessageItemProps = {
    id: 'id1',
    text: 'Жесть у вас тестовые',
    time: '1785876952',
};

export const messageFromOther: MessageItemProps = {
    id: 'id2',
    text: 'Это ты еще виртуалки на винде не видел',
    time: '1785876952',
};

export const messageWithImage: MessageItemProps = {
    id: 'id1',
    text: 'Ищем',
    time: '1785876952',
    images: [
        { src: 'https://avatars.mds.yandex.net/i?id=cf58788664c2fb0d65bf06f92952fc81_l-17839643-images-thumbs&n=13' },
    ]
};