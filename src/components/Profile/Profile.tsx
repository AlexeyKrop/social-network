import React from 'react';
import MyPost from "./Myposts/Mypost";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateWordsInPostInProfile} from "../../Redux/state";
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
  addPost: object,
  updateWordsInPostInProfile: object,
}
const Profile = (props: PostPropsType) => {
  return (
    <>
      <div>
        <img className={classes.image} src="https://about-planet.ru/images/evropa/strana/shvecaria/shveycaria1.jpg"
             alt="картинка"/>
      </div>
      <ProfileInfo />
      <MyPost messageData={props.messageData} addPost={props.addPost} updateWordsInPostInProfile={updateWordsInPostInProfile}/>
    </>
)
}
export default Profile;
