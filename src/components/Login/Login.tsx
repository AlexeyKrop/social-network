import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {loginTC} from "../../Redux/authorizationReducer";
import {Redirect} from "react-router-dom";


const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: (email: string, password: string, rememberMe: boolean) => {
      console.log(rememberMe)
      dispatch(loginTC(email, password, rememberMe))
    },
  }
}
const mapStateToProps = (state: any) => {
  return {
    isAuth: state.Authorization.isAuth
  }
}
const Login = (props: any) => {
  if (props.isAuth) {
    return <Redirect to={`/profile`}/>
  }
  const onSubmit = (FormData: any) => {
    console.log(FormData.rememberMe)
    props.login(FormData.email, FormData.password, FormData.rememberMe)
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);