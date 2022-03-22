import React from 'react';
import classes from './Post.module.css'
type postPropsType = {
  message: string,
  countLike: number,
}
const Post = (props: postPropsType) => {
  return (
    <div className={classes.item}>
      <img src='https://templates.envytheme.com/zust/default/assets/images/user/user-2.jpg' alt="avatar"/>
      <p>{props.message}</p>
      <span >{props.countLike}</span>
    </div>
  )
}
export default Post