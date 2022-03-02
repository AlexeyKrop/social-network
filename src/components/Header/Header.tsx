import React from 'react';
import logo from "../../logo.png";
import classes from "./Header.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <nav className={classes.nav}>
          <a href="/" className={classes.link}>
            <img src={logo} alt="logo" width={50} height={50}/>
          </a>
          <ul className={classes.list}>
            <li className={classes.item}><a href="/" className={classes.link}>ava</a></li>
            <li className={classes.item}><a href="/" className={classes.link}>login</a><a href="/" className={classes.link}>password</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
