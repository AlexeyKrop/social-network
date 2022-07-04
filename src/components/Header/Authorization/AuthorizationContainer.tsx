import React from "react";
import {Authorization} from "./Authorization";
import {connect} from "react-redux";
import {authUserTC, logoutTC} from "../../../Redux/authorizationReducer";
import {AppDispatch, AppStateType} from "../../../Redux/redux-store";


class AuthorizationContainer extends React.Component<any, any> {
  componentDidMount() {
    this.props.authUser()
  }

  render() {
    return <Authorization {...this.props}/>
  }
}

const mapStateToProps = (state: AppStateType) => ({
  login: state.Authorization.login,
  isAuth: state.Authorization.isAuth
})
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    authUser: () => {
      dispatch(authUserTC())
    },
    logout: () => {
      dispatch(logoutTC())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer)