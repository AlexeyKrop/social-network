import React from 'react';
import classes from './Dialogs.module.css';
import {MessageDialogsItem, MessagePropsType} from './MessageDialogsItem/MessageDialogsItem';
import {UserDialogsItem, UserItemPropsType} from './UserDialogsItem/UserDialogsItem';

type DialogsPropsType = {
  UserDialogsItems: Array<UserItemPropsType>
  MessageDialogsItems: Array<MessagePropsType>
}

const Dialogs = (props: DialogsPropsType) => {
  let MessageDialogsItemsData = props.MessageDialogsItems.map((MessageDialogItem, index) => <MessageDialogsItem
    src={MessageDialogItem.src} message={MessageDialogItem.message} message_time={MessageDialogItem.message_time}
    id={MessageDialogItem.id} key={index}/>)
  return (
    <>
      <ul className={classes.user}>
        {props.UserDialogsItems.map((UserDialogItem) => <UserDialogsItem
          src={UserDialogItem.src}
          name={UserDialogItem.name} id={UserDialogItem.id} key={UserDialogItem.id}/>)}
      </ul>
      {MessageDialogsItemsData}
    </>
  )
}
export default Dialogs;