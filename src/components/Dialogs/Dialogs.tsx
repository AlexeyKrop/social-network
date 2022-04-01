import React from 'react';
import ChatList from './ChatList/ChatList';
import classes from './Dialogs.module.css';
import {MessageDialogsItem, MessagePropsType} from './MessageDialogsItem/MessageDialogsItem';
import {UserDialogsItem, UserItemPropsType} from './UserDialogsItem/UserDialogsItem';
import {stateType} from "../../Redux/store";


type DialogsPropsType = {
  UserDialogsItems: Array<UserItemPropsType>
  MessageDialogsItems: Array<MessagePropsType>
  dispatch: (store: stateType) => void
}


const Dialogs = (props: DialogsPropsType) => {
  let MessageDialogsItemsData = props.MessageDialogsItems.map((MessageDialogItem, index) => <MessageDialogsItem
    src={MessageDialogItem.src} message={MessageDialogItem.message} message_time={MessageDialogItem.message_time}
    id={MessageDialogItem.id} key={index}/>)
  return (
    <div className={classes.wrapper}>
      <ul className={classes.user}>
        {props.UserDialogsItems.map((UserDialogItem, index) => <UserDialogsItem
          src={UserDialogItem.src}
          name={UserDialogItem.name} id={UserDialogItem.id} key={index}/>)}
      </ul>
      {MessageDialogsItemsData}
      <ChatList dispatch={props.dispatch}/>
    </div>

  )
}
export default Dialogs;