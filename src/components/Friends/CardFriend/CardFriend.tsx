import React from 'react';
import classes from "./CardFriend.module.css";
import {NavLink} from "react-router-dom";

type propsCardSrc = {
  followed: boolean
  user_name: string,
  user_avatar: {
    "small": string | undefined,
    "large": string | undefined
  }
  addFriend: (id: number) => void
  delFriend: (id: number) => void
  id: number,
}
const CardFriend = (props: propsCardSrc) => {
  const onClickAddFriendHandler = (id: number) => {
    props.addFriend(id)
  }
  const onClickDelFriendHandler = (id: number) => {
    props.delFriend(id)
  }
  const onClickSendMessageHandler = (id: number) => {
    // props.openModal(id)
  }
  return (
    <>
      <div className={classes.card}>
        <div className={classes.friends__image}>
          <NavLink to="#">
            <img src='https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg'
                 alt="img_bg"/>
          </NavLink>
          <div className={classes.icon}>
            <NavLink className={classes.link} to="#">
              <svg height="20" viewBox="0 0 24 24" width="20"
                   xmlns="http://www.w3.org/2000/svg"
                   fill='grey'>
                <path
                  d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 17v-.5a7.5 7.5 0 0 0 -15 0v.5a1 1 0 0 0 2 0v-.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 0 2 0zm9-5a7 7 0 0 0 -11.667-5.217 1 1 0 1 0 1.334 1.49 5 5 0 0 1 8.333 3.727 1 1 0 0 0 2 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5z"/>
              </svg>
            </NavLink>
          </div>
        </div>
        <div className={classes.friends__content}>
          <div className={classes.friends__info}>
            <NavLink to="profile">
              <img
                src={props.user_avatar.small ? props.user_avatar.small : 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg'}
                alt="img_card"/>
            </NavLink>
            <div className={classes.text}>
              <h3><NavLink to="#">{props.user_name}</NavLink></h3>
              <span>10 Mutual Friends</span>
            </div>
          </div>
          <ul className={classes.statistics}>
            <li>
              <NavLink to="#">
                <span className={classes.item_number}>862</span>
                <span className={classes.item_text}>Likes</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span className={classes.item_number}>91</span>
                <span className={classes.item_text}>Following</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span className={classes.item_number}>514</span>
                <span className={classes.item_text}>Followers</span>
              </NavLink>
            </li>
          </ul>
          <div className={classes.button_group}>
            <div className={classes.add_friend_btn}>
              {props.followed ? <button onClick={() => {
                  onClickAddFriendHandler(props.id)
                }} type="submit">Add Friend</button> :
                <button onClick={() => {
                  onClickDelFriendHandler(props.id)
                }} type="submit">Delete Friend</button>}
            </div>
            <div className={classes.send_message_btn}>
              <button onClick={() => {
                onClickSendMessageHandler(props.id)
              }} type="submit">Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*{props.sendMessageStatus ? <ModalMessage id={props.id} closeModal={props.closeModal}/> : ''}*/}
    </>
  )
}
export default CardFriend;