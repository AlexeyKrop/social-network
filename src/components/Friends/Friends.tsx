import React from 'react';
import classes from './Friends.module.css'
import CardFriend from './CardFriend/CardFriend';

const Friends = () => {
  return (
    <div className={classes.list}>
      <div className={classes.row}>
        <CardFriend />
        <CardFriend />
        <CardFriend />
        <CardFriend />
        <CardFriend />
        <CardFriend />
      </div>
    </div>
  )
}
export default Friends