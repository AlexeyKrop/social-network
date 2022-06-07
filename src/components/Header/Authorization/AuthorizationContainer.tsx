import React from "react";
import {Authorization} from "./Authorization";
import axios from "axios";
import {connect} from "react-redux";
import {setDataAC} from "../../../Redux/authorization-reducer";

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
    setData: (userId: number, email: string, login: string) => {
      dispatch(setDataAC(userId, email, login))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer)