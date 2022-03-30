import classes from "./MessageDialogsItem.module.css";
import React from "react";

export type MessagePropsType = {
  src: string,
  message: string,
  message_time: string,
  id: number,
}
export const MessageDialogsItem = (props: MessagePropsType) => {
  return (
    <div className={classes.chat}>
      <div className={classes.chat__avatar}>
        <a href="/">
          <img
            src={props.src}
            alt="img"/>
        </a>
      </div>
      <div className={classes.chat__body}>
        <div className={classes.chat__message}>
          <p>{props.message}</p>
          <span>{props.message_time}</span>
        </div>
      </div>
    </div>
  )
}