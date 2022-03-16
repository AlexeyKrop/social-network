import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <button className={classes.btn} type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7c-3.868 0-7 3.132-7 7c0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
           </button>
          </form>
          <ul className={classes.list}>
            <li className={classes.item}><NavLink to="/profile" className={classes.link}>
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"
                   fill="White">
                <path
                  d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"/>
              </svg>
            </NavLink></li>
            <li className={classes.item}><NavLink to="/dialogs" className={classes.link}>
              <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"
                   width="20"
                   height="20" fill='white'>
                <path
                  d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"
                />
              </svg>
            </NavLink></li>
            <li className={classes.item}><NavLink to="/music" className={classes.link}>
              <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"
                   width="20"
                   height="20" fill='white'>
                <path
                  d="M19,1H13A5.006,5.006,0,0,0,8,6v8.026A4.948,4.948,0,0,0,5,13a5,5,0,1,0,5,5V6a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v8.026A4.948,4.948,0,0,0,19,13a5,5,0,1,0,5,5V6A5.006,5.006,0,0,0,19,1ZM5,21a3,3,0,1,1,3-3A3,3,0,0,1,5,21Zm14,0a3,3,0,1,1,3-3A3,3,0,0,1,19,21Z"/>
              </svg>
              <sup className={classes.num}>1</sup>
            </NavLink></li>
            <li className={classes.item}><NavLink to="/friends" className={classes.link}>
              <svg className={classes.icon} height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"
                   fill='white'>
                <path
                  d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 17v-.5a7.5 7.5 0 0 0 -15 0v.5a1 1 0 0 0 2 0v-.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 0 2 0zm9-5a7 7 0 0 0 -11.667-5.217 1 1 0 1 0 1.334 1.49 5 5 0 0 1 8.333 3.727 1 1 0 0 0 2 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5z"/>
              </svg>
              <sup className={`${classes.num} ${classes.num__friend}`}>2</sup>
            </NavLink></li>
          </ul>
          <ul className={classes.list}>
            <li className={`${classes.item} ${classes.item_user}`}><a href="/" className={classes.link}><img
              className={classes.image}
              src='https://img4.goodfon.ru/original/1280x720/d/84/chingcho-chang-vostochnaia-gubki.jpg'
              alt="аватар"/>
            </a>
              <span className={classes.user_name}>Chang</span>
            </li>
            <li className={classes.item}><NavLink to="/" className={classes.link}>
              <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                   height="20"
                   fill='#fff'>
                <g id="_01_align_center" data-name="01 align center">
                  <path
                    d="M15,24H9V20.487a9,9,0,0,1-2.849-1.646L3.107,20.6l-3-5.2L3.15,13.645a9.1,9.1,0,0,1,0-3.29L.107,8.6l3-5.2L6.151,5.159A9,9,0,0,1,9,3.513V0h6V3.513a9,9,0,0,1,2.849,1.646L20.893,3.4l3,5.2L20.85,10.355a9.1,9.1,0,0,1,0,3.29L23.893,15.4l-3,5.2-3.044-1.758A9,9,0,0,1,15,20.487Zm-4-2h2V18.973l.751-.194A6.984,6.984,0,0,0,16.994,16.9l.543-.553,2.623,1.515,1-1.732-2.62-1.513.206-.746a7.048,7.048,0,0,0,0-3.75l-.206-.746,2.62-1.513-1-1.732L17.537,7.649,16.994,7.1a6.984,6.984,0,0,0-3.243-1.875L13,5.027V2H11V5.027l-.751.194A6.984,6.984,0,0,0,7.006,7.1l-.543.553L3.84,6.134l-1,1.732L5.46,9.379l-.206.746a7.048,7.048,0,0,0,0,3.75l.206.746L2.84,16.134l1,1.732,2.623-1.515.543.553a6.984,6.984,0,0,0,3.243,1.875l.751.194Zm1-6a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"/>
                </g>
              </svg>
            </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
