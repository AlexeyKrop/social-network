import React from 'react';
import classes from "./Sidebar.module.css";
function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <ul className={classes.list}>
        <li className={classes.item}><a href="/profile" className={`${classes.link} ${classes.active}`}>Profile</a></li>
        <li className={classes.item}><a href="/dialogs" className={classes.link}>Message</a></li>
        <li className={classes.item}><a href="/news" className={classes.link}>News</a></li>
        <li className={classes.item}><a href="/music" className={classes.link}>Music</a></li>
        <li className={classes.item}><a href="/settings" className={classes.link}>Settings</a></li>
      </ul>
    </aside>
  )
}
export default Sidebar;
