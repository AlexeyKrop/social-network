import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import {authMe} from "../../api/api";

const Login = () => {
  const onSubmit = (FormData: any) => {
    authMe.login({...FormData}).then(res => console.log(res))
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;