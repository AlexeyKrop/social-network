import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {loginTC} from "../../Redux/authorizationReducer";


const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: (email: string, password: string, rememberMe: boolean) => {
      dispatch(loginTC(email, password, rememberMe))
    },
  }
}
const Login = (props: any) => {

  const onSubmit = (FormData: any) => {
    props.login(FormData.email, FormData.password, FormData.rememberMe)
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Login);