import {authMe} from "../api/api";
import {Dispatch} from "redux";

let initialState = {
  id: 0,
  email: 'null',
  login: 'null',
  isAuth: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: SetDataAT): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data,
        isAuth: action.data.isAuth
      }
    default:
      return state
  }
}

type SetDataAT = SetUserDataAT

export const setDataAC = (userId: number, email: string, login: string, isAuth: boolean) => ({
  type: 'SET_USER_DATA',
  data: {id: userId, email: email, login: login, isAuth}
} as const)
type SetUserDataAT = ReturnType<typeof setDataAC>

export const authUserTC = (): any => {
  return (dispatch: Dispatch) => {
    authMe.me()
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          dispatch(setDataAC(id, email, login, true))
        }
      })
  }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): any => {
  return (dispatch: Dispatch) => {
    authMe.login(email, password, rememberMe)
      .then(res => dispatch(authUserTC()))
  }
}