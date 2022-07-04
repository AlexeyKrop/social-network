import * as React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';


const LoginForm = (props: InjectedFormProps) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="email" placeholder={'login'} component="input" type="text"/>
      <Field name="password" placeholder={'password'} component="input" type="text"/>
      <Field name="checkbox" component="input" type="checkbox"/> remember me
      <button>Enter</button></form>
  )

};

export const LoginReduxForm =
  reduxForm({form: 'login'})
  (LoginForm);