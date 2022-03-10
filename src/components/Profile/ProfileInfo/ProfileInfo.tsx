import React from 'react';
import classes from "../ProfileInfo/ProfileInfo.module.css";
import {NavLink} from "react-router-dom";

const ProfileInfo = () => {
  return(
  <div className={classes.profileInfo}>
    <div className={classes.info__image}>
      <NavLink to="#">
        <img
          src="https://w7.pngwing.com/pngs/1008/377/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-black-hair-computer.png"
          alt="img"/>
      </NavLink>
      <div className={classes.icon}>
        <NavLink to="#">
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" fill="grey">
            <path
              d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z"/>
            <path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"/>
          </svg>
        </NavLink>
      </div>
      <div className={classes.info__text}>
        <h3><NavLink to="#">Alex Smith</NavLink></h3>
        <span><a href="mailto:matthew@gmail.com">smith@gmail.com</a></span>
      </div>
    </div>
    <div className={classes.wrapper__information}>
      <div className={classes.about__personal_information}>
        <div className={classes.about__header}>
          <div className={classes.title}>Personal Information</div>
          <div className={classes.dropdown}>
            <button className={classes.dropdown__toggle} type="button" data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode"
                   viewBox="0 0 24 24" width="22" height="22">
                <circle cx="21.517" cy="12.066" r="2.5"/>
                <circle cx="12" cy="12" r="2.5"/>
                <circle cx="2.5" cy="12" r="2.5"/>
              </svg>
            </button>
            <ul className={classes.dropdown__menu}>
              <li><NavLink to="#">
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"
                     fill="lightgray">
                  <path
                    d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/>
                  <path
                    d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/>
                </svg>
                Edit Information</NavLink></li>
              <li><NavLink to="#">
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"
                     fill="lightgray">
                  <path
                    d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z"/>
                </svg>
                Hide Information</NavLink></li>
              <li><NavLink to="#">
                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" fill="lightgray">
                  <path
                    d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/>
                  <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/>
                  <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/>
                </svg> Delete Information
              </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <ul className={classes.information__list}>
          <li>
            <span>Email:</span> <a href="mailto:info@zust.com">info@zust.com</a>
          </li>
          <li>
            <span>Birthday:</span> May 07, 1984
          </li>
          <li>
            <span>Phone:</span> <a href="tel:916-879-7755">916-879-7755</a>
          </li>
          <li>
            <span>Gender:</span> Men
          </li>
          <li>
            <span>Relationship Status:</span> Single
          </li>
          <li>
            <span>Blood Group:</span> A+ Positive
          </li>
          <li>
            <span>Website:</span> <NavLink to="#">www.good.com</NavLink>
          </li>
          <li>
            <span>Social Link:</span> <NavLink to="#">www.hello.com</NavLink>
          </li>
          <li>
            <span>Languages:</span> English, Turkish
          </li>
        </ul>
      </div>
      <div className={classes.about__details_information}>
        <div className={classes.content}>
          <h3>About Me</h3>
          <p>Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis
            quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque auctor sit
            amet aliquam vel ullamcorper sit amet ligula. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Sed porttitor lectus nibh.</p>
          <p>Vivamus magna justo lacinia eget consectetur sed convallis at tellus. Nulla porttitor accumsan
            tincidunt. Quisque velit nisi pretium ut lacinia in elementum id enim. Donec rutrum congue leo eget
            malesuada. Quisque velit nisi pretium ut lacinia in elementum id enim. Vivamus magna justo lacinia
            eget consectetur sed convallis at tellus.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default  ProfileInfo