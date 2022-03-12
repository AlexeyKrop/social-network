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
              {/*<NavLink to="#"><i className="flaticon-user"></i></NavLink>*/}
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