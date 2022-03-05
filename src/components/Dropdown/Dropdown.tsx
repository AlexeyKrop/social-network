import React from 'react';
import classes from './Dropdown.module.css';
import {NavLink} from "react-router-dom";
const Dropdown = () => {
  return(
    <>
      <div className={classes.dropdown}>
        <ul className={classes.dropdown_list}>
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
                                                activeClassName={classes.active}><span>Help & Support</span>
            <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" fill='lightgray'><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/><path d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z"/><rect x="11" y="17" width="2" height="2" rx="1"/></svg>
          </NavLink></li>
          <li className={classes.item}><NavLink to="/news" className={classes.link}
                                                activeClassName={classes.active}><span>LogOut</span>
            <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" fill='lightgray'><path d="M22.829,9.172,18.95,5.293a1,1,0,0,0-1.414,1.414l3.879,3.879a2.057,2.057,0,0,1,.3.39c-.015,0-.027-.008-.042-.008h0L5.989,11a1,1,0,0,0,0,2h0l15.678-.032c.028,0,.051-.014.078-.016a2,2,0,0,1-.334.462l-3.879,3.879a1,1,0,1,0,1.414,1.414l3.879-3.879a4,4,0,0,0,0-5.656Z"/><path d="M7,22H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7A1,1,0,0,0,7,0H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7a1,1,0,0,0,0-2Z"/></svg>

          </NavLink></li>
        </ul>
      </div>
    </>
  )
}
export default Dropdown;