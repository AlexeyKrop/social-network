import React from 'react';
import {LoginForm} from "./LoginForm";

const Login = () => {
  const onSubmit = (FormData: any) => {
    console.log(FormData)
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;