import React from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType) => {
  return {
    auth: state.Authorization.isAuth
  }
}
export const withAuthRedirect = (Component: any) => {
  const RedirectComponent = (props: any) => {
    if (!props.auth) return <Redirect to={'/login'}/>
    return <Component {...props}/>
  }
  return connect(mapStateToProps)(RedirectComponent)
}