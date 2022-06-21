import React from 'react';
import classes from "../ProfileInfo/ProfileInfo.module.css";
import {NavLink} from "react-router-dom";
import DropDownProfile from "../../DropDownProfile/DropDownProfile";
import {Preloader} from "../../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
  profile: {
    aboutMe: string
    contacts: { facebook: string, website: null, vk: string, twitter: string, instagram: string, mainLink: string, github: string }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string, large: string }
    userId: number,
  },
  status: string
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={classes.profileInfo}>
      <div className={classes.info__image}>
        <NavLink to="#">
          <img
            src={props.profile.photos.large ? props.profile.photos.large : "https://img4.goodfon.ru/original/1280x720/d/84/chingcho-chang-vostochnaia-gubki.jpg"}
            alt="img"/>
        </NavLink>
        <div className={classes.icon}>
          <NavLink to="#">
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" fill="white">
              <path
                d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z"/>
              <path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"/>
            </svg>
          </NavLink>
        </div>
        <div className={classes.info__text}>
          <ProfileStatus status={props.status}/>
          <h3><NavLink to="#">{props.profile.fullName}</NavLink></h3>
          <span><a
            href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : props.profile.contacts.github}</a></span>
        </div>
      </div>
      <div className={classes.wrapper__information}>
        <div className={classes.about__personal_information}>
          <div className={classes.about__header}>
            <div className={classes.title}>Personal Information</div>
            <DropDownProfile/>
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
            <p>{props.profile.aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo