import React from 'react';
import {NavLink, RouteComponentProps, withRouter} from 'react-router-dom';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./Myposts/MypostContainer";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";
import {getProfileUserTC} from "../../Redux/profilePageReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
  auth: boolean
  match: any
}
type initialProfileType = {
  profile: null
}
type MapStateToPropsMainType = MapStateToPropsType | initialProfileType
type MapDispatchToPropsType = {
  getProfileUser: (profile: MapStateToPropsMainType) => void
}
type StatePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & StatePropsType

class ProfileContainer extends React.Component<any, PropsType> {
  componentDidMount() {
    let userID = this.props.match.params.userId
    if (!userID) {
      userID = 2
    }
    this.props.getProfileUser(userID)

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
    getProfileUser: (id: number) => {
      dispatch(getProfileUserTC(id))
    }
  }
}
export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
  withRouter,
)(ProfileContainer)

