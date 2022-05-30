export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let initialState = {
  cardFriends: [] as Array<UserStateType>,
  currentPageNumber: 1,
  pageSize: 9,
  totalUserCount: 20
}
export type UserStateType = {
  id: number
  name: string
  status: string
  uniqueUrlName: string
  photos: {
    small: string
    large: string
  }
  followed: boolean

}

type InitialStateInFriendPageType = typeof initialState
type ActionFriendPageReducerType =
  AddFriendAT
  | DelFriendAT
  | OpenModalInFriendAT
  | CloseModalInFriendAT
  | SetUsersAT
  | SetCurrentPageNumberAT
type AddFriendAT = {
  type: 'ADD_FRIEND', uId: number
}
type DelFriendAT = {
  type: 'DELETE_FRIEND', uId: number
}
type OpenModalInFriendAT = {
  type: 'OPEN_MODAL', uId: number
}
type CloseModalInFriendAT = {
  type: 'CLOSE_MODAL', uId: number
}
type SetUsersAT = {
  type: 'SET_USERS', users: Array<UserStateType>
}
type SetCurrentPageNumberAT = {
  type: 'SET_CURRENT_PAGE',
  currentPageNumber: number
}

const friendsPageReducer = (state = initialState, action: ActionFriendPageReducerType): InitialStateInFriendPageType => {
  switch (action.type) {
    case ADD_FRIEND: {
      return {
        ...state,
        cardFriends: state.cardFriends.map(s => s.id === action.uId ? {...s, followed: !s.followed} : s)
      }
    }
    case DELETE_FRIEND: {
      return {
        ...state,
        cardFriends: state.cardFriends.map(s => s.id === action.uId ? {...s, followed: !s.followed} : s)
      }
    }
    case OPEN_MODAL: {
      return {
        ...state
      }
    }
    case CLOSE_MODAL: {
      return {
        ...state
      }
    }
    case SET_USERS: {
      return {...state, cardFriends: [...action.users]}
    }
    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPageNumber: action.currentPageNumber
      }
    }
    default:
      return state
  }

}
export const addFriendAC = (uId: number): AddFriendAT => {
  return {type: ADD_FRIEND, uId: uId}
}
export const delFriendAC = (uId: number): DelFriendAT => {
  return {type: DELETE_FRIEND, uId: uId}
}
export const openModalInFriendAC = (uId: number): OpenModalInFriendAT => {
  return {type: OPEN_MODAL, uId: uId}
}
export const closeModalInFriendAC = (uId: number): CloseModalInFriendAT => {
  return {type: CLOSE_MODAL, uId: uId}
}
export const setUsersAC = (users: Array<UserStateType>): SetUsersAT => {
  return {type: SET_USERS, users: users}
}
export const setCurrentPageNumberAC = (currentPageNumber: number): SetCurrentPageNumberAT => {
  return {
    type: SET_CURRENT_PAGE,
    currentPageNumber: currentPageNumber
  }
}
export default friendsPageReducer