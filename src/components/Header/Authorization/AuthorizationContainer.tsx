import React from "react";
import {Authorization} from "./Authorization";
import axios from "axios";
import {connect} from "react-redux";
import {setDataAC} from "../../../Redux/authorizationReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../../Redux/redux-store";

class AuthorizationContainer extends React.Component<any, any> {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          this.props.setUserData(id, email, login)
        }
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`, {
          withCredentials: true
        })
      })
      .then(response => {
        // console.log(response.data)
      })

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
    setUserData: (userId: number, email: string, login: string) => {
      dispatch(setDataAC(userId, email, login))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer)