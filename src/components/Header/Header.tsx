import React from 'react';
import logo from "../../logo.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <nav className={classes.nav}>
          <a href="/" className={classes.link}>
            <img src={logo} alt="logo" width={50} height={50}/>
          </a>
          <form className={classes.form}>
            <input type="text" className={classes.input__search} placeholder="Search..." />
            <button className={classes.btn} type="submit"><i className={classes.search_line}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
            </i></button>
          </form>
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
