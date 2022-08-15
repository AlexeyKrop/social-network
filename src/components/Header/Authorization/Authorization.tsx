import classes from "../Header.module.css";
import React from "react";
import s from './Authorization.module.css'


export const Authorization = (props: any) => {
  const onClickHandler = () => {
    props.logout()
  }

  return (
    <>
      {props.isAuth ? <ul className={`${classes.list} ${classes.list_logout}`}>
        <li className={`${classes.item} ${classes.item_user}`}><a href="/" className={classes.link}><img
          className={classes.image}
          src='https://cdn-icons-png.flaticon.com/512/147/147142.png'
          alt="аватар" />
        </a>
        </li>
        <li>
          <button className={s.btn} onClick={onClickHandler}>Logout</button>
        </li>
      </ul> : <p />}
    </>
  )
}