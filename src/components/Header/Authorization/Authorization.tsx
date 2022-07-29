import classes from "../Header.module.css";
import React from "react";
import s from './Authorization.module.css'


export const Authorization = (props: any) => {
  console.log(props.error)
  const onClickHandler = () => {
    props.logout()
  }

  return (
    <>
      {props.isAuth ? <ul className={`${classes.list} ${classes.list_logout}`}>
        <li className={`${classes.item} ${classes.item_user}`}><a href="/" className={classes.link}><img
          className={classes.image}
          src='https://img4.goodfon.ru/original/1280x720/d/84/chingcho-chang-vostochnaia-gubki.jpg'
          alt="аватар"/>
        </a>
        </li>
        <li>
          <button className={s.btn} onClick={onClickHandler}>Logout</button>
        </li>
      </ul> : <p/>}
    </>
  )
}