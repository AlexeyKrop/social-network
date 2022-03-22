import React from 'react';
import classes from './Post.module.css'
type postPropsType = {
  message: string,
  countLike: number,
  src: string,
}
const Post = (props: postPropsType) => {
  return (
    <div className={classes.item}>
      <img src={props.src} alt="avatar"/>
      <p>{props.message}</p>
      <span >{props.countLike}</span>
    </div>
  )
}
export default Post