import React from 'react';
import classes from './Friends.module.css'
import CardFriend from './CardFriend/CardFriend';
import {userStateType} from "../../Redux/friendsPageReducer";

// type cardFriendType = {
//   cardAvatar: string,
//   cardBg: string,
//   user_name: string,
//   friendStatus: boolean,
//   sendMessageStatus: boolean,
//   id: string,
// }
export type cardFriendsPropsType = {
  cardFriends: Array<userStateType>
  addFriend: (id: string) => void
  delFriend: (id: string) => void
  openModal: (id: string) => void
  closeModal: (id: string) => void
}
const Friends = (props: cardFriendsPropsType) => {
  let Cards = props.cardFriends.map(item => <CardFriend key={item.id} addFriend={props.addFriend}
                                                        delFriend={props.delFriend}
                                                        openModal={props.openModal}
                                                        closeModal={props.closeModal}
                                                        avatarSrc={item.cardAvatar}
                                                        sendMessageStatus={item.sendMessageStatus}
                                                        friendStatus={item.friendStatus}
                                                        bgSrc={item.cardBg}
                                                        user_name={item.user_name} id={item.id}/>)
  return (
    <div className={classes.list}>
      <div className={classes.row}>
        {Cards}
      </div>
    </div>
  )
}
export default Friends