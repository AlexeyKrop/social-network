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
ReactDOM.render(
    <App messageData={messages} UserDialogsItems={UserDialogsItems} MessageDialogsItems={MessageDialogsItems}/>,
  document.getElementById('root')
);