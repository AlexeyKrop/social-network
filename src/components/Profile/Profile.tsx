import React from 'react';
import { NavLink } from 'react-router-dom';
import MyPost from "./Myposts/Mypost";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type messageType = {
  user_name: string,
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
      <div className={classes.image}>
        <NavLink to="/" className={classes.edit_cover_btn}>Edit Cover</NavLink>
      </div>
      <ProfileInfo/>
      <MyPost messageData={props.messageData} dispatch={props.dispatch}/>
    </>
  )
}
export default Profile;
