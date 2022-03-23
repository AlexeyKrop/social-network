import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Post.module.css'

type postPropsType = {
  user_name: string,
  message: string,
  countLike: number,
  src: string,
}
const Post = (props: postPropsType) => {
  return (
    <div className={classes.item}>
      <div className={classes.post_header}>
        <NavLink className={classes.post_header_link} to='/'><img src={props.src} alt="avatar"/>
          <div className={classes.post_description}>
            <span
              className={classes.user_name}>{props.user_name}</span><span
            className={classes.small_text}>10 Min Ago</span>
          </div>
        </NavLink>
      </div>
      <p>{props.message}</p>
      <ul className={classes.post_meta}>
        <li className={classes.post_react}>
          <NavLink to="/" className={classes.link}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"
                 fill='lightgray'>
              <path
                d="M22.773,7.721A4.994,4.994,0,0,0,19,6H15.011l.336-2.041A3.037,3.037,0,0,0,9.626,2.122L7.712,6H5a5.006,5.006,0,0,0-5,5v5a5.006,5.006,0,0,0,5,5H18.3a5.024,5.024,0,0,0,4.951-4.3l.705-5A5,5,0,0,0,22.773,7.721ZM2,16V11A3,3,0,0,1,5,8H7V19H5A3,3,0,0,1,2,16Zm19.971-4.581-.706,5A3.012,3.012,0,0,1,18.3,19H9V7.734a1,1,0,0,0,.23-.292l2.189-4.435A1.07,1.07,0,0,1,13.141,2.8a1.024,1.024,0,0,1,.233.84l-.528,3.2A1,1,0,0,0,13.833,8H19a3,3,0,0,1,2.971,3.419Z"/>
            </svg>
            <span className={classes.text}>Like</span> <span
            className={classes.number}>{props.countLike}</span></NavLink>
        </li>
        <li className={classes.post_react}>
          <NavLink to="/" className={classes.link}>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill='lightgray'>
              <path
                d="M18.5,0H5.5A5.507,5.507,0,0,0,0,5.5v9A5.507,5.507,0,0,0,5.5,20H6.938l4.1,3.428a1.5,1.5,0,0,0,1.924,0L17.062,20H18.5A5.507,5.507,0,0,0,24,14.5v-9A5.507,5.507,0,0,0,18.5,0ZM21,14.5A2.5,2.5,0,0,1,18.5,17H16.517a1.5,1.5,0,0,0-.962.35L12,20.322,8.445,17.35A1.5,1.5,0,0,0,7.483,17H5.5A2.5,2.5,0,0,1,3,14.5v-9A2.5,2.5,0,0,1,5.5,3h13A2.5,2.5,0,0,1,21,5.5Z"/>
              <path d="M7.5,9h3a1.5,1.5,0,0,0,0-3h-3a1.5,1.5,0,0,0,0,3Z"/>
              <path d="M16.5,11h-9a1.5,1.5,0,0,0,0,3h9a1.5,1.5,0,0,0,0-3Z"/>
            </svg>
            <span className={classes.text}>Comment</span> <span
            className={classes.number}>{props.countLike}</span></NavLink>
        </li>
        <li className={classes.post_react}>
          <NavLink to="/" className={classes.link}>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill='lightgray'>
              <g id="_01_align_center" data-name="01 align center">
                <path
                  d="M19.333,14.667a4.66,4.66,0,0,0-3.839,2.024L8.985,13.752a4.574,4.574,0,0,0,.005-3.488l6.5-2.954a4.66,4.66,0,1,0-.827-2.643,4.633,4.633,0,0,0,.08.786L7.833,8.593a4.668,4.668,0,1,0-.015,6.827l6.928,3.128a4.736,4.736,0,0,0-.079.785,4.667,4.667,0,1,0,4.666-4.666ZM19.333,2a2.667,2.667,0,1,1-2.666,2.667A2.669,2.669,0,0,1,19.333,2ZM4.667,14.667A2.667,2.667,0,1,1,7.333,12,2.67,2.67,0,0,1,4.667,14.667ZM19.333,22A2.667,2.667,0,1,1,22,19.333,2.669,2.669,0,0,1,19.333,22Z"/>
              </g>
            </svg>

            <span className={classes.text}>Share</span> <span
            className={classes.number}>{props.countLike}</span></NavLink>
        </li>
      </ul>
    </div>
  )
}
export default Post