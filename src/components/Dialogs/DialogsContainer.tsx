import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  MessageDialogsItemType,
  updateWordsInDialogsActionCreator,
  UserDialogsItemType
} from "../../Redux/dialogsPageReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  UserDialogsItems: Array<UserDialogsItemType>
  MessageDialogsItems: Array<MessageDialogsItemType>
  updateWordInMessagePage: string
  auth: boolean
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
    auth: state.Authorization.isAuth
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;