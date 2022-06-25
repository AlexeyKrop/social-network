import * as React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {compose} from 'redux';


const Login = (props: InjectedFormProps) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="login" placeholder={'login'} component="input" type="text"/>
      <Field name="password" placeholder={'password'} component="input" type="text"/>
      <Field name="checkbox" component="input" type="checkbox"/> remember me
      <button>Enter</button></form>
  )

};

export const LoginForm = compose(
  reduxForm({form: 'login'}),
)(Login);