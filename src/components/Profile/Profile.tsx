import React from 'react';
import MyPost from "./Myposts/Mypost";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
type PostPropsType={
  messageData: Array<Object>;
  addPost: any
}
const Profile = (props: PostPropsType) => {
  return (
    <>
      <div>
        <img className={classes.image} src="https://about-planet.ru/images/evropa/strana/shvecaria/shveycaria1.jpg"
             alt="картинка"/>
      </div>
      <ProfileInfo />
      <MyPost messageData={props.messageData} addPost={props.addPost}/>
    </>
)
}
export default Profile;
