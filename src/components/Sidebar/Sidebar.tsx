import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Sidebar.module.css";
function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink to="/profile" className={classes.link} activeClassName={classes.active}><span>Profile</span>
            <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                 fill='lightgray'>
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"/>
                <path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z"/>
              </g>
            </svg>
          </NavLink></li>
        <li className={classes.item}><NavLink to="/dialogs" className={classes.link}
                                              activeClassName={classes.active}><span>Message</span>
          <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20"
               height="20" fill='lightgray'>
            <path
              d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"
            />
          </svg>
        </NavLink></li>
        <li className={classes.item}><NavLink to="/news" className={classes.link}
                                              activeClassName={classes.active}><span>News</span>
          <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
               fill='lightgray'>
            <g id="_01_align_center" data-name="01 align center">
              <path d="M24,22H0V5A3,3,0,0,1,3,2H21a3,3,0,0,1,3,3ZM2,20H22V5a1,1,0,0,0-1-1H3A1,1,0,0,0,2,5Z"/>
              <rect x="9" y="11" width="11" height="2"/>
              <rect x="4" y="11" width="3" height="2"/>
              <rect x="4" y="16" width="11" height="2"/>
              <rect x="17" y="16" width="3" height="2"/>
            </g>
          </svg>
        </NavLink></li>
        <li className={classes.item}><NavLink to="/music" className={classes.link}
                                              activeClassName={classes.active}><span>Music</span>
          <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20"
               height="20" fill='lightgray'>
            <path
              d="M19,1H13A5.006,5.006,0,0,0,8,6v8.026A4.948,4.948,0,0,0,5,13a5,5,0,1,0,5,5V6a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3v8.026A4.948,4.948,0,0,0,19,13a5,5,0,1,0,5,5V6A5.006,5.006,0,0,0,19,1ZM5,21a3,3,0,1,1,3-3A3,3,0,0,1,5,21Zm14,0a3,3,0,1,1,3-3A3,3,0,0,1,19,21Z"/>
          </svg>
        </NavLink></li>
        <li className={classes.item}><NavLink to="/settings" className={classes.link}
                                              activeClassName={classes.active}><span>Settings</span>
          <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
               fill='lightgray'>
            <g id="_01_align_center" data-name="01 align center">
              <path
                d="M15,24H9V20.487a9,9,0,0,1-2.849-1.646L3.107,20.6l-3-5.2L3.15,13.645a9.1,9.1,0,0,1,0-3.29L.107,8.6l3-5.2L6.151,5.159A9,9,0,0,1,9,3.513V0h6V3.513a9,9,0,0,1,2.849,1.646L20.893,3.4l3,5.2L20.85,10.355a9.1,9.1,0,0,1,0,3.29L23.893,15.4l-3,5.2-3.044-1.758A9,9,0,0,1,15,20.487Zm-4-2h2V18.973l.751-.194A6.984,6.984,0,0,0,16.994,16.9l.543-.553,2.623,1.515,1-1.732-2.62-1.513.206-.746a7.048,7.048,0,0,0,0-3.75l-.206-.746,2.62-1.513-1-1.732L17.537,7.649,16.994,7.1a6.984,6.984,0,0,0-3.243-1.875L13,5.027V2H11V5.027l-.751.194A6.984,6.984,0,0,0,7.006,7.1l-.543.553L3.84,6.134l-1,1.732L5.46,9.379l-.206.746a7.048,7.048,0,0,0,0,3.75l.206.746L2.84,16.134l1,1.732,2.623-1.515.543.553a6.984,6.984,0,0,0,3.243,1.875l.751.194Zm1-6a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"/>
            </g>
          </svg>
        </NavLink></li>
      </ul>
    </aside>
  )
}
export default Sidebar;
