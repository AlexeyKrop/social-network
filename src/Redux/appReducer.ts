import {Dispatch} from "redux";
import {authUserTC} from "./authorizationReducer";
import {AppDispatch, AppThunk} from "./redux-store";
import {btoa} from "buffer";
import {log} from "util";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'loading' as RequestStatusType,
  error: null as null | string,
  initialized: false,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppReducerType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {...state, status: action.status}
    case "APP/SET-ERROR":
      return {
        ...state,
        error: action.error
      }
    case "APP/SET-INITIALIZED":
      return {
        ...state,
        initialized: action.initialized
      }
    default:
      return state
  }
}

//ACTIONS CREATOR
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppInitializedAC = (initialized: boolean) => ({type: 'APP/SET-INITIALIZED', initialized} as const)


//THUNK

export const initializedTC = () => (dispatch: any) => {
  let promise = dispatch(authUserTC())
  Promise.all([promise])
    .then(() => dispatch(setAppInitializedAC(true)))
}
//TYPES
export type ActionsAppType = SetAppStatusAT | SetAppErrorAT | AppReducerType
type SetAppStatusAT = ReturnType<typeof setAppStatusAC>
type SetAppErrorAT = ReturnType<typeof setAppErrorAC>
type SetAppInitializedAT = ReturnType<typeof setAppInitializedAC>
type AppReducerType = SetAppStatusAT | SetAppErrorAT | SetAppInitializedAT