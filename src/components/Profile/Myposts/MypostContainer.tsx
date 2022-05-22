import React from 'react';
import {
  AddMessageInProfilePage,
  addPostActionCreator,
  updatePostInProfileActionCreator
} from '../../../Redux/profilePageAddPostReducer';
import MyPost from "./Mypost";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
// const MyPostContainer = (props: PostPropsType) => {
//   const addPost = (post: string) => {
//     props.dispatch(addPostActionCreator(post))
//   }
//   const updatePostInProfilePage = (updateWords: string) => {
//     props.dispatch(updatePostInProfileActionCreator(updateWords))
//   }
//   return (
//     <MyPost messageData={props.messageData} addPost={addPost} updatePostInProfilePage={updatePostInProfilePage}/>
//   )
// }
type mapStateToPropsType = {
  messageData: Array<AddMessageInProfilePage>
}
type mapDispatchToPropsType = {
  addPost: (post: string) => void
  updatePostInProfilePage: (updateWords: string) => void
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
    updatePostInProfilePage: (updateWords: string) => {
      dispatch(updatePostInProfileActionCreator(updateWords))
    }
  }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer