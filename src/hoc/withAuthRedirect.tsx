import React from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
  auth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    auth: state.Authorization.isAuth
  }
}
export const withAuthRedirect = (Component: any) => {
  const RedirectComponent = (props: MapStateToPropsType) => {
    if (!props.auth) return <Redirect to={'/login'}/>
    return <Component {...props}/>
  }
  return connect(mapStateToProps)(RedirectComponent)
}