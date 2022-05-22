import React from 'react';
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  MessageDialogsItemType,
  updateWordsInDialogsActionCreator,
  UserDialogsItemType
} from "../../Redux/addMessagesInMessagePageReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";


// const DialogsContainer = (props: DialogsPropsType) => {
//   const addMessage = (message: string) => {
//     props.dispatch(addMessageActionCreator(message))
//   }
//   const updateWordsInDialogs = (updateWordsInDialogs: string) => {
//     props.dispatch(updateWordsInDialogsActionCreator(updateWordsInDialogs))
//   }
//   return (
//     <div className={classes.wrapper}>
//       <Dialogs UserDialogsItems={props.UserDialogsItems} MessageDialogsItems={props.MessageDialogsItems}/>
//       <ChatList addMessage={addMessage} updateWordsInDialogs={updateWordsInDialogs}/>
//     </div>
//   )
// }
type mapStateToPropsType = {
  UserDialogsItems: Array<UserDialogsItemType>
  MessageDialogsItems: Array<MessageDialogsItemType>
  updateWordInMessagePage: string
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    UserDialogsItems: state.MessagePage.UserDialogsItems,
    MessageDialogsItems: state.MessagePage.MessageDialogsItems,
    updateWordInMessagePage: state.MessagePage.updateWordInMessagePage
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addMessage: (message: string) => {
      dispatch(addMessageActionCreator(message))
    },
    updateWordsInDialogs: (updateWordsInDialogs: string) => {
      dispatch(updateWordsInDialogsActionCreator(updateWordsInDialogs))
    }

  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;