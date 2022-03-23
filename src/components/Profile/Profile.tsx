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
type PostPropsType={
  messageData: updatePostInProfileType;
  dispatch: object,
}
const Profile = (props: PostPropsType) => {
  return (
    <>
      <div>
        <img className={classes.image} src="https://about-planet.ru/images/evropa/strana/shvecaria/shveycaria1.jpg"
             alt="картинка"/>
      </div>
      <ProfileInfo />
      <MyPost messageData={props.messageData} dispatch={props.dispatch}/>
    </>
)
}
export default Profile;
