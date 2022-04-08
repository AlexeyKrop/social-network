import React from 'react';
import ChatList from './ChatList/ChatList';
import classes from './Dialogs.module.css';
import {MessagePropsType} from './MessageDialogsItem/MessageDialogsItem';
import {UserItemPropsType} from './UserDialogsItem/UserDialogsItem';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateWordsInDialogsActionCreator} from "../../Redux/addMessagesInMessagePageReducer";
import {stateType} from "../../Redux/store";

type addMessageType = {
  type: string,
  newMess: string
}
type updateWordsType = {
  type: string,
  newMess: string
}
type DialogsPropsType = {
  UserDialogsItems: Array<UserItemPropsType>
  MessageDialogsItems: Array<MessagePropsType>
  dispatch: Function
}


const DialogsContainer = (props: DialogsPropsType) => {
  const addMessage = (message: string) => {
    props.dispatch(addMessageActionCreator(message))
  }
  const updateWordsInDialogs = (updateWordsInDialogs: string) => {
    props.dispatch(updateWordsInDialogsActionCreator(updateWordsInDialogs))
  }
  return (
    <div className={classes.wrapper}>
      <Dialogs UserDialogsItems={props.UserDialogsItems} MessageDialogsItems={props.MessageDialogsItems}/>
      <ChatList addMessage={addMessage} updateWordsInDialogs={updateWordsInDialogs}/>
    </div>


  )
}
export default DialogsContainer;