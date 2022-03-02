import React from 'react';
import classes from "./MyPost.module.css"

function MyPost(){
  return(
    <div className={classes.mypost}>
      <div className={classes.post}>
        <textarea name="message" className={classes.textarea} placeholder="Напишите пост"/>
        <button>add post</button>
      </div>
      <div className="post">Post1</div>
    </div>
  )
}
export default MyPost