import React from 'react';
import MyPost from "./Myposts/Mypost";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
type messageType = {
  message: string
  countLike: number,
  id: number,
}
type PostPropsType={
  messageData: Array<messageType>;
  addPost: object
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
