import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';

type UserItemPropsType = {
  src: string,
  name: string,
  id: string,
}
type MessagePropsType = {
  src: string,
  message: string,
  message_time: string,
  className: string,
}
type DialogsPropsType = {
  UserDialogsItems: Array<any>
  MessageDialogsItems: Array<any>
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
const Dialogs = (props: DialogsPropsType) => {
  let MessageDialogsItemsData = props.MessageDialogsItems.map(MessageDialogItem => <MessageDialogsItem
    src={MessageDialogItem.src} message={MessageDialogItem.message} message_time={MessageDialogItem.message_time}
    className={MessageDialogItem.className} key={MessageDialogItem.id}/>)
  let UserDialogsItemsData = props.UserDialogsItems.map(UserDialogItem => <UserDialogsItem
    src={UserDialogItem.src}
    name={UserDialogItem.name} id={UserDialogItem.id} key={UserDialogItem.id}/>)
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