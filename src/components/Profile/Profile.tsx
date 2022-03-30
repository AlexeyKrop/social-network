import React from 'react';
import {NavLink} from 'react-router-dom';
import MyPost from "./Myposts/Mypost";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MessagesType} from "../../Redux/store";

type PostPropsType = {
  messageData: MessagesType;
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
