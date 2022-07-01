import React from 'react';
import {AddMessageInProfilePage, addPostActionCreator,} from '../../../Redux/profilePageReducer';
import MyPost from "./Mypost";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  messageData: Array<AddMessageInProfilePage>
}
type mapDispatchToPropsType = {
  addPost: (post: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    messageData: state.ProfilePage.messages,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    addPost: (post: string) => {
      dispatch(addPostActionCreator(post))
    },
  }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer