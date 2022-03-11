import React from 'react';
import classes from './Post.module.css'
import ava from '../../../../ava.jpg';
type postPropsType = {
  message: string,
  countLike: number,
  // key: number;
}
const Post = (props: postPropsType) => {
  return (
    <div className={classes.item}>
      <img src={ava} alt="avatar"/>
      <p>{props.message}</p>
      <span >{props.countLike}</span>
    </div>
  )
}
export default Post