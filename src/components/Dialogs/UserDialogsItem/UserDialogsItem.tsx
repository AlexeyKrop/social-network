import classes from "./UserDialogsItem.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

export type UserItemPropsType = {
  src: string,
  name: string,
  id: string,
}
export const UserDialogsItem = (props: UserItemPropsType) => {
  return (
    <li className={classes.user__item}><NavLink to={"/dialogs/" + props.id}>
      <img className={classes.user__avatar}
           src={props.src}
           alt="img"/>
    </NavLink>{props.name}</li>
  )
}