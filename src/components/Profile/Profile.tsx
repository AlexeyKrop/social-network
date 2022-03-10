import React from 'react';
import MyPost from "./Myposts/Mypost";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <>
      <div>
        <img className={classes.image} src="https://about-planet.ru/images/evropa/strana/shvecaria/shveycaria1.jpg"
             alt="картинка"/>
      </div>
      <ProfileInfo />
      <MyPost/>
    </>
)
}
export default Profile;
