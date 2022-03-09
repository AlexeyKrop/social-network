import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

console.log(classes)
const Dialogs = () => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.user}>
        <li className={classes.user__item}><NavLink to="/dialogs/1" className="d-inline-block">
          <img className={classes.user__avatar}
            src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
             alt="img" />
        </NavLink>Kelly Smith</li>
        <li className={classes.user__item}><NavLink to="/dialogs/2" className="d-inline-block">
          <img className={classes.user__avatar} src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg"
              alt="img"/>
        </NavLink>Stepan Bogdan</li>
        <li className={classes.user__item}><NavLink to="/dialogs/3" className="d-inline-block">
          <img className={classes.user__avatar}
            src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg"
            alt="img"/>
        </NavLink>Alex Piter</li>
        <li className={classes.user__item}><NavLink to="/dialogs/4" className="d-inline-block">
          <img className={classes.user__avatar} src="https://pluggedin.ru/images/1-bigTopImage_2021_08_17_20_35_36.jpg"
               alt="img"/>
        </NavLink>James Smith</li>
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