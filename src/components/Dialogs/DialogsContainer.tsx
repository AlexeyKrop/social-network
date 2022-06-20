import Dialogs from "./Dialogs";
import React from "react";
import {
  addMessageActionCreator,
  MessageDialogsItemType,
  updateWordsInDialogsActionCreator,
  UserDialogsItemType
} from "../../Redux/dialogsPageReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType = {
  UserDialogsItems: Array<UserDialogsItemType>
  MessageDialogsItems: Array<MessageDialogsItemType>
  updateWordInMessagePage: string
}
type mapDispatchToPropsType = {
  addMessage: (message: string) => void
  updateWordsInDialogs: (updateWordsInDialogs: string) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    UserDialogsItems: state.MessagePage.UserDialogsItems,
    MessageDialogsItems: state.MessagePage.MessageDialogsItems,
    updateWordInMessagePage: state.MessagePage.updateWordInMessagePage,
  }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addMessage: (message: string) => {
      dispatch(addMessageActionCreator(message))
    },
    updateWordsInDialogs: (updateWordsInDialogs: string) => {
      dispatch(updateWordsInDialogsActionCreator(updateWordsInDialogs))
    }

  }
}
export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)