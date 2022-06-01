import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./Myposts/MypostContainer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then(response => response.data)
  }

  render() {
    return (
      <>
        <div className={classes.image}>
          <NavLink to="/" className={classes.edit_cover_btn}>Edit Cover</NavLink>
        </div>
        <ProfileInfo/>
        <MyPostContainer/>
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {}
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
