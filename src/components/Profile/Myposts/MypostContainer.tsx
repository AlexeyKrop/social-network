import React from 'react';
import {addPostActionCreator, updatePostInProfileActionCreator} from '../../../Redux/profilePageAddPostReducer';
import {MessagesType} from "../../../Redux/store";
import MyPost from "./Mypost";

type PostPropsType = {
  messageData: MessagesType
  dispatch: Function,
}
const MyPostContainer = (props: PostPropsType) => {
  const addPost = (post: string) => {
    props.dispatch(addPostActionCreator(post))
  }
  const updatePostInProfilePage = (updateWords: string) => {
    props.dispatch(updatePostInProfileActionCreator(updateWords))
  }
  return (
    <MyPost messageData={props.messageData} addPost={addPost} updatePostInProfilePage={updatePostInProfilePage}/>
  )
}
export default MyPostContainer