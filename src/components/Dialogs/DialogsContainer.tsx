import React from 'react';
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  MessageDialogsItemType,
  updateWordsInDialogsActionCreator,
  UserDialogsItemType
} from "../../Redux/addMessagesInMessagePageReducer";
import {stateType} from "../../Redux/store";
import {connect} from "react-redux";


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
const mapStateToProps = (state: stateType): mapStateToPropsType => {
  return {
    UserDialogsItems: state.MessagePage.UserDialogsItems,
    MessageDialogsItems: state.MessagePage.MessageDialogsItems,
    updateWordInMessagePage: state.MessagePage.updateWordInMessagePage
  }
}
const mapDispatchToProps = (dispatch: any) => {
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