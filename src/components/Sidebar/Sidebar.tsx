import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Sidebar.module.css";
function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <ul className={classes.list}>
        <li className={classes.item}><NavLink to="/profile" className={classes.link} activeClassName={classes.active}>Profile</NavLink></li>
        <li className={classes.item}><NavLink to="/dialogs" className={classes.link} activeClassName={classes.active}>Message</NavLink></li>
        <li className={classes.item}><NavLink to="/news" className={classes.link} activeClassName={classes.active}>News</NavLink></li>
        <li className={classes.item}><NavLink to="/music" className={classes.link} activeClassName={classes.active}>Music</NavLink></li>
        <li className={classes.item}><NavLink to="/settings" className={classes.link} activeClassName={classes.active}>Settings</NavLink></li>
      </ul>
    </aside>
  )
}
export default Sidebar;
