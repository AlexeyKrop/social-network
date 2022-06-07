import React from "react";
import {Authorization} from "./Authorization";
import axios from "axios";
import {connect} from "react-redux";
import {setDataAC} from "../../../Redux/authorization-reducer";
import {setProfileUserAC} from "../../../Redux/profilePageReducer";

class AuthorizationContainer extends React.Component<any, any> {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(response => {
        console.log(response.data)
      })
  }

  render() {
    return <Authorization {...this.props}/>
  }
}

const mapStateToProps = (state: any) => {
  return {
    state
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    setData: (setData: any) => {
      // dispatch(setDataAC(userId, email, login))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer)