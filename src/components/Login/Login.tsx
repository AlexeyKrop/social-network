import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Redux/authorizationReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import {validateEmail} from "../../common/validate/validate";
import s from './Login.module.css'

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
    dispatch(loginTC(email, password, checkbox))
    setSubmitting(false);
  }
  if (isAuth) {
    return <Redirect to={`/profile`}/>
  }
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Signup</p>
      <Formik initialValues={initialValues} onSubmit={onSubmitHandler}
      >
        {({errors, touched, isValidating}) => (
          <Form className={s.form}>
            <Field className={errors.email ? `${s.error}` : `${s.input}`} id="email" name="email" placeholder="email"
                   validate={validateEmail}/>
            {errors.email && touched.email &&
              <div className={errors.email ? `${s.errorText}` : ''}>{errors.email}</div>}
            <Field id="password" name="password" placeholder="password" type='password'/>
            <label htmlFor="checkbox">Remember me</label>
            <Field
              id="checkbox"
              name="checkbox"
              type="checkbox"
            />
            <button className={s.btn} disabled={!!errors.email} type="submit">Submit</button>
          </Form>
        )}

      </Formik>
    </div>
  );
};



