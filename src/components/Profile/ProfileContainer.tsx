import React from 'react';
import {NavLink, RouteComponentProps, withRouter} from 'react-router-dom';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./Myposts/MypostContainer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import axios from "axios";
import {setProfileUserAC} from "../../Redux/profilePageReducer";

type PathParamsType = {
  userId: string,
}
type MapStateToPropsType = {
  userId?: number
  lookingForAJob?: boolean
  lookingForAJobDescription?: string
  fullName?: string
  contacts?: {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
  }
  photos?: {
    small?: string
    large?: string
  }
}
type initialProfileType = {
  profile: null
}
type MapStateToPropsMainType = MapStateToPropsType | initialProfileType

type MapDispatchToPropsType = {
  setProfileUser: (profile: MapStateToPropsMainType) => void
}
type StatePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & StatePropsType

class ProfileContainer extends React.Component<any, any> {
  componentDidMount() {
    let userID = this.props.match.params.userId
    if (!userID) {
      userID = 2
    }
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
      .then(response => {
        this.props.setProfileUser(response.data)
      })
  }

  render() {
    return (
      <>
        <div className={classes.image}>
          <NavLink to="/" className={classes.edit_cover_btn}>Edit Cover</NavLink>
        </div>
        <ProfileInfo {...this.props}/>
        <MyPostContainer/>
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsMainType => {
  return {
    profile: state.ProfilePage.profile,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setProfileUser: (profile: any) => {
      dispatch(setProfileUserAC(profile))
    },
  }
}
const ProfileContainerWithRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithRouter);
