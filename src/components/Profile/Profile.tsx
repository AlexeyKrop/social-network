import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MessagesType, stateType} from "../../Redux/store";
import MyPostContainer from "./Myposts/MypostContainer";

type PostPropsType = {
  messageData: MessagesType;
  dispatch: (store: stateType) => void,
}
const Profile = (props: PostPropsType) => {
  return (
    <>
      <div className={classes.image}>
        <NavLink to="/" className={classes.edit_cover_btn}>Edit Cover</NavLink>
      </div>
      <ProfileInfo/>
      <MyPostContainer messageData={props.messageData} dispatch={props.dispatch}/>
    </>
  )
}
export default Profile;
