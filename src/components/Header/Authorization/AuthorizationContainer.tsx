import React from "react";
import {Authorization} from "./Authorization";
import {connect} from "react-redux";
import {authUserTC, logoutTC} from "../../../Redux/authorizationReducer";
import {AppStateType, TypedDispatch} from "../../../Redux/redux-store";

type mapStateToPropsType = {
  login: string
  isAuth: boolean
}
type mapDispatchToPropsType = {
  authUser: () => void
  logout: () => void
}

class AuthorizationContainer extends React.Component<mapDispatchToPropsType, mapStateToPropsType> {
  componentDidMount() {
    console.log(this.props)
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
const mapDispatchToProps = (dispatch: TypedDispatch) => {
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