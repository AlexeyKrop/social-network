import React from 'react';
import classes from "./MyPost.module.css"
import Post from "./Post/Post";
function MyPost(){
  return(
    <div className={classes.mypost}>
      <div className={classes.post}>
        <textarea name="message" className={classes.textarea} placeholder="Напишите пост"/>
        <button className={classes.btn}>add post</button>
      </div>
      <Post message='hello world' countLike={5}/>
    </div>
  )
}
export default MyPost