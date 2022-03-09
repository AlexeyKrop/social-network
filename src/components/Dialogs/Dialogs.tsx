import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
type UserItemPropsType = {
  src: string;
  name: string;
  id: string;
}
const UserDialogsItem = (props: UserItemPropsType) =>{
  return(
    <li className={classes.user__item}><NavLink to={"/dialogs/" + props.id}>
      <img className={classes.user__avatar}
           src={props.src}
           alt="img"/>
    </NavLink>{props.name}</li>
  )
}
const Dialogs = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.user}>
        <UserDialogsItem src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3" name="Kelly Smith" id='1'/>
        <UserDialogsItem src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" name="Stepan Bogdan" id='2'/>
        <UserDialogsItem src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg" name="Alex Piter" id='3'/>
        <UserDialogsItem src="https://pluggedin.ru/images/1-bigTopImage_2021_08_17_20_35_36.jpg" name="James Smith" id='4'/>
      </ul>
      <div className={classes.chat}>
        <div className={classes.chat__avatar}>
          <a href="/" className="d-inline-block">
            <img
              src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
              className="rounded-circle" alt="img"/>
          </a>
        </div>
        <div className={classes.chat__body}>
          <div className={classes.chat__message}>
            <p>Hello, dear I want talk to you?</p>
            <span className="time d-block">7:45 AM</span>
          </div>
        </div>
      </div>
      <div className={`${classes.chat} ${classes.chat__left}`}>
        <div className={classes.chat__avatar}>
          <a href="/" className="d-inline-block">
            <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg"
                 className="rounded-circle" alt="img"/>
          </a>
        </div>

        <div className={classes.chat__body}>
          <div className={classes.chat__message}>
            <p>Said how can I cooperate with you?</p>
            <span className="time d-block">7:45 AM</span>
          </div>
        </div>
      </div>
      <div className={classes.chat}>
        <div className={classes.chat__avatar}>
          <a href="/" className="d-inline-block">
            <img
              src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg"
              alt="img"/>
          </a>
        </div>
        <div className={classes.chat__body}>
          <div className={classes.chat__message}>
            <p>What you want to know about design</p>
            <span>7:45 AM</span>
          </div>
        </div>
      </div>
      <div className={`${classes.chat} ${classes.chat__left}`}>
        <div className={classes.chat__avatar}>
          <a href="/" className="d-inline-block">
            <img src="https://pluggedin.ru/images/1-bigTopImage_2021_08_17_20_35_36.jpg"
                 alt="img"/>
          </a>
        </div>

        <div className={classes.chat__body}>
          <div className={classes.chat__message}>
            <p>I need some ideas from you about my design</p>
            <span>7:45 AM</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;