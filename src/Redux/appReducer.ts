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
    default:
      return state
  }
}

//ACTIONS CREATOR
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppInitializedAC = (initialized: boolean) => ({type: 'APP/SET-INITIALIZED', initialized} as const)
//TYPES
export type ActionsAppType = SetAppStatusAT | SetAppErrorAT | AppReducerType
type SetAppStatusAT = ReturnType<typeof setAppStatusAC>
type SetAppErrorAT = ReturnType<typeof setAppErrorAC>
type SetAppInitializedAT = ReturnType<typeof setAppInitializedAC>
type AppReducerType = SetAppStatusAT | SetAppErrorAT