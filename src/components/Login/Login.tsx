import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Redux/authorizationReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";

type Values = {
  email: string;
  password: string;
  checkbox: boolean;
}

export const Login = () => {
  const isAuth = useSelector<AppStateType, boolean>(state => state.Authorization.isAuth)
  const dispatch = useDispatch()
  if (isAuth) {
    return <Redirect to={`/profile`}/>
  }
  return (
    <div>

      <h1>Signup</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          checkbox: false,
        }}
        onSubmit={(
          values: Values,
          {setSubmitting}: FormikHelpers<Values>
        ) => {
          let {email, password, checkbox} = values
          dispatch(loginTC(email, password, checkbox))
          setSubmitting(false);
        }}
      >
        <Form>
          <Field id="email" name="email" placeholder="login"/>
          <Field id="password" name="password" placeholder="password" type='password'/>
          <Field
            id="checkbox"
            name="checkbox"
            type="checkbox"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};



