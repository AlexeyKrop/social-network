import React from 'react';
import {NavLink, RouteComponentProps, withRouter} from 'react-router-dom';
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./Myposts/MypostContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppDispatch, AppStateType} from "../../Redux/redux-store";
import {getProfileStatusTC, getProfileUserTC, updateProfileStatusTC} from "../../Redux/profilePageReducer";
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
  match: any,
  status: string
}
type initialProfileType = {
  profile: MapStateToPropsType | null
}
type MapStateToPropsMainType = MapStateToPropsType | initialProfileType
type MapDispatchToPropsType = {
  getProfileUser: (id: number) => void
  getProfileStatus: (id: number) => void
  updateProfileStatus: (status: string) => void
}
type StatePropsType = MapStateToPropsType & MapDispatchToPropsType
type PropsType = RouteComponentProps<PathParamsType> & StatePropsType

class ProfileContainer extends React.Component<any, PropsType> {
  componentDidMount() {
    let userID = this.props.match.params.userId
    if (!userID) {
      userID = this.props.userId
    }
    this.props.getProfileUser(userID)
    this.props.getProfileStatus(userID)

  }

  render() {
    return (
      <>
        <div className={classes.image}>
          <NavLink to="/" className={classes.edit_cover_btn}>Edit Cover</NavLink>
        </div>
        <ProfileInfo profile={this.props.profile} status={this.props.status}
                     updateProfileStatus={this.props.updateProfileStatus}/>
        <MyPostContainer/>
      </>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsMainType => {
  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    userId: state.Authorization.id
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    getProfileUser: (id: number) => {
      dispatch(getProfileUserTC(id))
    },
    getProfileStatus: (id: number) => {
      dispatch(getProfileStatusTC(id))
    },
    updateProfileStatus: (status: string) => {
      dispatch(updateProfileStatusTC(status))
    }

  }
}
export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
  withRouter,
)(ProfileContainer)

