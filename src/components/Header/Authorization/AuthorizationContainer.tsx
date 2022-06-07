import React from "react";
import {Authorization} from "./Authorization";
import axios from "axios";
import {connect} from "react-redux";

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

export default connect()(AuthorizationContainer)