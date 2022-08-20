import {authMe} from "../api/api";
import {AppDispatch, AppThunk, TypedDispatch} from "./redux-store";
import {ActionsAppType, setAppErrorAC, setAppInitializedAC} from "./appReducer";

let initialState = {
  id: 0,
  email: 'null',
  login: 'null',
  isAuth: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionAuthorizationReducerType): InitialStateType => {
  switch (action.type) {
    case 'auth/SET_USER_DATA':
      return {
        ...state,
        ...action.data,
        isAuth: action.data.isAuth
      }
    default:
      return state
  }
}

export type ActionAuthorizationReducerType = SetUserDataAT | ActionsAppType

export const setDataAC = (userId: number, email: string, login: string, isAuth: boolean) => ({
  type: 'auth/SET_USER_DATA',
  data: {id: userId, email: email, login: login, isAuth}
} as const)
type SetUserDataAT = ReturnType<typeof setDataAC>

export const authUserTC = (): AppThunk => {
  return (dispatch: AppDispatch) => {
    authMe.me()
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          dispatch(setDataAC(id, email, login, true))
        }
        dispatch(setAppInitializedAC(true))
      })
  }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => {
  return (dispatch: TypedDispatch) => {
    authMe.login(email, password, rememberMe)
      .then((res) => {
        if (res.data.resultCode === 0) {
          dispatch(authUserTC())
        } else {
          dispatch(setAppErrorAC('login or password are incorrect'))
        }
      })
      .catch(err => dispatch(setAppErrorAC(err.message)))
  }
}
export const logoutTC = (): AppThunk => {
  return (dispatch: TypedDispatch) => {
    authMe.logout()
      .then(() => {
        dispatch(setDataAC(0, '', '', false))
      })
  }
}