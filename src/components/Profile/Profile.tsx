import React from 'react';
import MyPost from "./Myposts/Mypost";
import classes from "./Profile.module.css";
const Profile = () => {
  return (
    <>
      <div>
        <img className={classes.image} src="https://about-planet.ru/images/evropa/strana/shvecaria/shveycaria1.jpg" alt="картинка"/>
      </div>
      <div className="ava">ava + description</div>
      <MyPost />
    </>
  )
}
export default Profile;
