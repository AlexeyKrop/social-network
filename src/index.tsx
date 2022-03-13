import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import classes from "./components/Dialogs/Dialogs.module.css";
let messages = [
  {
    message: 'hello world',
    countLike: 5,
    id: 1,
  },
  {
    message: 'hello how are you?',
    countLike: 8,
    id: 2,
  },
]
let UserDialogsItems = [
  {
    src: "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3",
    name: "Kelly Smith",
    id: '1',

  },
  {
    src: "https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg",
    name: "Stepan Bogdan",
    id: '2',

  },
  {
    src: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
    name: "Alex Piter",
    id: '3',

  },
  {
    src: "https://pluggedin.ru/images/1-bigTopImage_2021_08_17_20_35_36.jpg",
    name: "James Smith",
    id: '4',
  },
]
let MessageDialogsItems = [
  {
    src: "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3",
    message: "Hello, dear I want talk to you?",
    message_time: "7 45 АМ",
    className: "",
    id: '1',
  },
  {
    src: "https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg",
    message: "Said how can I cooperate with you",
    message_time: "8 45 АМ",
    className: classes.chat__left,
    id: '2',
  },
  {
    src: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
    message: "Hello, dear I want talk to you?",
    message_time: "9 45 АМ",
    className: "",
    id: '3',
  },
  {
    src: "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3",
    message: "I need some ideas from you about my design",
    message_time: "10 45 АМ",
    className: classes.chat__left,
    id: '4',
  }
]
let cardFriends = [
  {
    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg',
    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg',
    user_name: 'Jose Marroquin',
    id: 1
  },
  {
    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-2.jpg',
    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-2.jpg',
    user_name: 'Myrtle Lewis',
    id: 2
  },
  {
    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-3.jpg',
    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-3.jpg',
    user_name: 'Howard Tam',
    id: 3
  },
  {
    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-4.jpg',
    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-4.jpg',
    user_name: 'Kimberly Blum',
    id: 4
  },
  {
    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-5.jpg',
    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-5.jpg',
    user_name: 'Mary Mercado',
    id: 5
  },
  {
    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-6.jpg',
    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-6.jpg',
    user_name: 'Robert Ward',
    id: 6
  }
]
ReactDOM.render(
    <App messageData={messages} UserDialogsItems={UserDialogsItems} MessageDialogsItems={MessageDialogsItems} cardFriends={cardFriends}/>,
  document.getElementById('root')
);