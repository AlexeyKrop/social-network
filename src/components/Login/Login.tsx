import React from 'react';
import {LoginReduxForm} from "./LoginForm";

const Login = () => {
  const onSubmit = (FormData: any) => {
    console.log(FormData)
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;