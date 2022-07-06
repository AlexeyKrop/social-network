import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Redux/authorizationReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import {validateEmail} from "../../common/validate/validate";

type ValuesType = {
  email: string;
  password: string;
  checkbox: boolean;
}

export const Login = () => {
  const isAuth = useSelector<AppStateType, boolean>(state => state.Authorization.isAuth)
  const dispatch = useDispatch()
  type initialValuesType = {
    email: string
    password: string
    checkbox: boolean,
  }
  const initialValues: initialValuesType = {
    email: '', password: '', checkbox: false,
  }
  const onSubmitHandler = (values: ValuesType, {setSubmitting}: FormikHelpers<ValuesType>) => {
    let {email, password, checkbox} = values
    validateEmail(email)
    dispatch(loginTC(email, password, checkbox))
    setSubmitting(false);
  }
  if (isAuth) {
    return <Redirect to={`/profile`}/>
  }
  return (
    <div>
      <h1>Signup</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmitHandler}
      >
        <Form>
          <Field id="email" name="email" placeholder="email"/>
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



