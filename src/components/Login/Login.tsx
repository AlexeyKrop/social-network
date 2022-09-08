import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Field, Form, Formik, FormikHelpers} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Redux/authorizationReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import {validateEmail} from "../../common/validate/validate";
import s from './Login.module.css'
import {Alert} from "antd";
import {setAppErrorAC} from "../../Redux/appReducer";


type ValuesType = {
  email: string;
  password: string;
  checkbox: boolean;
}

export const Login = () => {
  const isAuth = useSelector<AppStateType, boolean>(state => state.Authorization.isAuth)
  const error = useSelector<AppStateType, null | string>(state => state.appReducer.error)
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
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(setAppErrorAC(''))
  };
  return (

    <div className={s.wrapper}>
      <div><p>To log in get registered
        <a href={'https://social-network.samuraijs.com/'}
           target={'_blank'}> here
        </a>
      </p>
        <p>or use common test account credentials:</p>
        <p>Email: free@samuraijs.com</p>
        <p>Password: free</p></div>

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
      </Formik> {error ? <Alert
      message="Error"
      description='login or password are incorrect'
      type="error"
      closable
      onClose={onClose}
    /> : ''}
    </div>
  );
};



