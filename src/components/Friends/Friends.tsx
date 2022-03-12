import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Friends.module.css'

const Friends = () => {
  return (
    <div className={classes.list}>
      <div className="col-lg-3 col-sm-6">
        <div className={classes.card}>
          <div className="friends-image">
            <NavLink to="#">
              {/*<img src="assets/images/friends/friends-bg-1.jpg" alt="image"/>*/}
            </NavLink>
            <div className="icon">
              <NavLink to="#">
                <svg className={classes.icon} height="20" viewBox="0 0 24 24" width="20"
                     xmlns="http://www.w3.org/2000/svg"
                     fill='grey'>
                  <path
                    d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5zm7.5 17v-.5a7.5 7.5 0 0 0 -15 0v.5a1 1 0 0 0 2 0v-.5a5.5 5.5 0 0 1 11 0v.5a1 1 0 0 0 2 0zm9-5a7 7 0 0 0 -11.667-5.217 1 1 0 1 0 1.334 1.49 5 5 0 0 1 8.333 3.727 1 1 0 0 0 2 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-7a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0 -2.5-2.5z"/>
                </svg>
              </NavLink>
            </div>
          </div>
          <div className="friends-content">
            <div className="friends-info d-flex justify-content-between align-items-center">
              <NavLink to="#">
                {/*<img src="assets/images/friends/friends-1.jpg" alt="image"/>*/}
              </NavLink>
              <div className="text ms-3">
                <h3><NavLink to="#">Jose Marroquin</NavLink></h3>
                <span>10 Mutual Friends</span>
              </div>
            </div>
            <ul className="statistics">
              <li>
                <NavLink to="#">
                  <span className="item-number">862</span>
                  <span className="item-text">Likes</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <span className="item-number">91</span>
                  <span className="item-text">Following</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  <span className="item-number">514</span>
                  <span className="item-text">Followers</span>
                </NavLink>
              </li>
            </ul>
            <div className="button-group d-flex justify-content-between align-items-center">
              <div className="add-friend-btn">
                <button type="submit">Add Friend</button>
              </div>
              <div className="send-message-btn">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Friends