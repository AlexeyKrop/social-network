import React from 'react';
import MyPost from "./Myposts/Mypost";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type messageType = {
  message: string
  countLike: number,
  src: string,
  id: number,
}
type updatePostInProfileType = {
  messages: Array<messageType>
}
type PostPropsType = {
  messageData: updatePostInProfileType;
  dispatch: Function,
}
const Profile = (props: PostPropsType) => {
  return (
    <>
      <div className={classes.image} />
      <ProfileInfo/>
      <MyPost messageData={props.messageData} dispatch={props.dispatch}/>
    </>
  )
}
export default Profile;
