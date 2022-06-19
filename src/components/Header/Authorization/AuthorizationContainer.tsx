import React from "react";
import {Authorization} from "./Authorization";
import {connect} from "react-redux";
import {authUserTC} from "../../../Redux/authorizationReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";


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
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    authUser: () => {
      dispatch(authUserTC())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer)