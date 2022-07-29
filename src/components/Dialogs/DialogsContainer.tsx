import Dialogs from "./Dialogs";
import React from "react";
import {
  addMessageActionCreator,
  MessageDialogsItemType,
  UserDialogsItemType
} from "../../Redux/dialogsPageReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type mapStateToPropsType = {
  UserDialogsItems: Array<UserDialogsItemType>
  MessageDialogsItems: Array<MessageDialogsItemType>
  id: number
}
type mapDispatchToPropsType = {
  addMessage: (message: string) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    UserDialogsItems: state.MessagePage.UserDialogsItems,
    MessageDialogsItems: state.MessagePage.MessageDialogsItems,
    id: state.Authorization.id
  }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addMessage: (message: string) => {
      dispatch(addMessageActionCreator(message))
    },


  }
}
export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)