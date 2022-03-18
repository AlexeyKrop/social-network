import React from 'react';
import MyPost from "./Myposts/Mypost";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
type messageType = {
  message: string
  countLike: number,
  id: number,
}
type updatePostInProfileType = {
  messages: Array<messageType>
  updatePostInProfile: string
}
type PostPropsType={
  messageData: updatePostInProfileType;
  addPost: object
}
const Profile = (props: PostPropsType) => {
  console.log(props)
  return (
    <>
      <div>
        <img className={classes.image} src="https://about-planet.ru/images/evropa/strana/shvecaria/shveycaria1.jpg"
             alt="картинка"/>
      </div>
      <ProfileInfo />
      <MyPost messageData={props.messageData.messages} addPost={props.addPost}/>
    </>
)
}
export default Profile;
