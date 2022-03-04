import React from 'react';
import classes from './Dialogs.module.css';
const Dialogs = () =>{
  return (
    <div className={classes.wrapper}>
      <ul className={classes.user}>
        <li className={classes.user__item}>Tiger</li>
        <li className={classes.user__item}>Leo</li>
        <li className={classes.user__item}>Monkey</li>
      </ul>
      <ul className={classes.dialogs}>
        <li className={classes.dialogs}>Hello</li>
        <li className={classes.dialogs}>How are you</li>
        <li className={classes.dialogs}>Good</li>
      </ul>
    </div>
  )
}
export default Dialogs