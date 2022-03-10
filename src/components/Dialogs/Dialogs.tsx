import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

type UserItemPropsType = {
  src: string;
  name: string;
  id: string;
}
type MessagePropsType = {
  src: string,
  message: string,
  message_time: string,
  className: string,
}
const UserDialogsItem = (props: UserItemPropsType) => {
  return (
    <li className={classes.user__item}><NavLink to={"/dialogs/" + props.id}>
      <img className={classes.user__avatar}
           src={props.src}
           alt="img"/>
    </NavLink>{props.name}</li>
  )
}
const MessageDialogsItem = (props: MessagePropsType) => {
  return (
    <div className={`${classes.chat} ${props.className}`}>
      <div className={classes.chat__avatar}>
        <a href="/">
          <img
            src={props.src}
            alt="img"/>
        </a>
      </div>
      <div className={classes.chat__body}>
        <div className={classes.chat__message}>
          <p>{props.message}</p>
          <span>{props.message_time}</span>
        </div>
      </div>
    </div>
  )
}
const Dialogs = () => {
  let UserDialogsItems = [
    {
      src: "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3",
      name: "Kelly Smith",
      id: '1'
    },
    {
      src: "https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg",
      name: "Stepan Bogdan",
      id: '2'
    },
    {
      src: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
      name: "Alex Piter",
      id: '3'
    },
    {
      src: "https://pluggedin.ru/images/1-bigTopImage_2021_08_17_20_35_36.jpg",
      name: "James Smith",
      id: '4'
    },
  ]
  let MessageDialogsItems = [
    {
      src: "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3",
      message: "Hello, dear I want talk to you?",
      message_time: "7 45 АМ",
      className: "",
    },
    {
      src: "https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg",
      message: "Said how can I cooperate with you",
      message_time: "8 45 АМ",
      className: classes.chat__left,
    },
    {
      src: "https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg",
      message: "Hello, dear I want talk to you?",
      message_time: "9 45 АМ",
      className: "",
    },
    {
      src: "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3",
      message: "I need some ideas from you about my design",
      message_time: "10 45 АМ",
      className: classes.chat__left,
    }
  ]
  let MessageDialogsItemsData = MessageDialogsItems.map(MessageDialogItem => <MessageDialogsItem
    src={MessageDialogItem.src} message={MessageDialogItem.message} message_time={MessageDialogItem.message_time}
    className={MessageDialogItem.className}/>)
  let UserDialogsItemsData = UserDialogsItems.map(UserDialogItem => <UserDialogsItem
    src={UserDialogItem.src}
    name={UserDialogItem.name} id={UserDialogItem.id}/>)
  return (
    <div className={classes.wrapper}>
      <ul className={classes.user}>
        {UserDialogsItemsData}
      </ul>
      {MessageDialogsItemsData}
    </div>
  )
}
export default Dialogs;