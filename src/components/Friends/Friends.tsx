import React from 'react';
import classes from './Friends.module.css'
import CardFriend from './CardFriend/CardFriend';

type cardFriendType = {
  cardAvatar: string,
  cardBg: string,
  user_name: string,
  id: string,
}
type cardFriendsPropsType = {
  cardFriends: Array<cardFriendType>
}
const Friends = (props: cardFriendsPropsType) => {
  let Cards = props.cardFriends.map(item => <CardFriend avatarSrc={item.cardAvatar} bgSrc={item.cardBg}
                                                        user_name={item.user_name} key={item.id}/>)
  return (
    <div className={classes.list}>
      <div className={classes.row}>
        {Cards}
      </div>
    </div>
  )
}
export default Friends