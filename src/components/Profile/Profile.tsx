import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./Myposts/MypostContainer";

const Profile = () => {
  return (
    <>
      <div className={classes.image}>
        <NavLink to="/" className={classes.edit_cover_btn}>Edit Cover</NavLink>
      </div>
      <ProfileInfo/>
      <MyPostContainer/>
    </>
  )
}
export default Profile;
