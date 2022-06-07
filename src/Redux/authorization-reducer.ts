let initialState = {
  id: 0,
  email: 'null',
  login: 'null',
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: SetDataAT): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

type SetDataAT = SetUserDataAT
export const setDataAC = (userUd: number, email: string, login: string) => ({
  type: 'SET_USER_DATA',
  data: {id: userUd, email: email, login: login,}
} as const)
type SetUserDataAT = ReturnType<typeof setDataAC>