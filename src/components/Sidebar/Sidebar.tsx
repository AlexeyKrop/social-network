import React from 'react';
import classes from "./Sidebar.module.css";
function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <ul className={classes.list}>
        <li className={classes.item}><a href="/" className={classes.link}>Profile</a></li>
        <li className={classes.item}><a href="/" className={classes.link}>Message</a></li>
        <li className={classes.item}><a href="/" className={classes.link}>News</a></li>
        <li className={classes.item}><a href="/" className={classes.link}>Music</a></li>
        <li className={classes.item}><a href="/" className={classes.link}>Settings</a></li>
      </ul>
    </aside>
  )
}
export default Sidebar;
