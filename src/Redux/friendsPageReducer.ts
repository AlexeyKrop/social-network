import {userAPI} from "../api/api";
import {AppThunk} from "./redux-store";

export const ADD_FRIEND = 'friends/ADD_FRIEND';
export const DELETE_FRIEND = 'friends/DELETE_FRIEND';
export const OPEN_MODAL = 'friends/OPEN_MODAL';
export const CLOSE_MODAL = 'friends/CLOSE_MODAL'
export const SET_USERS = 'friends/SET_USERS'
export const SET_CURRENT_PAGE = 'friends/SET_CURRENT_PAGE'
export const SET_TOTAL_USER_COUNT = 'friends/SET_TOTAL_USER_COUNT'
export const SET_TOGGLE_PRELOADER = 'friends/SET_TOGGLE_PRELOADER'

let initialState = {
  cardFriends: [] as Array<UserStateType>,
  currentPageNumber: 1,
  pageSize: 12,
  totalUserCount: 30,
  preloader: false,
}

//////TYPE///////////////////////////////////////
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
export type ActionFriendPageReducerType =
  AddFriendAT
  | DelFriendAT
  | OpenModalInFriendAT
  | CloseModalInFriendAT
  | SetUsersAT
  | SetCurrentPageNumberAT
  | SetTotalUserCountAT | setTogglePreloaderAT
type AddFriendAT = {
  type: 'friends/ADD_FRIEND', uId: number
}
type DelFriendAT = {
  type: 'friends/DELETE_FRIEND', uId: number
}
type OpenModalInFriendAT = {
  type: 'friends/OPEN_MODAL', uId: number
}
type CloseModalInFriendAT = {
  type: 'friends/CLOSE_MODAL', uId: number
}
type SetUsersAT = {
  type: 'friends/SET_USERS', users: Array<UserStateType>
}
type SetCurrentPageNumberAT = {
  type: 'friends/SET_CURRENT_PAGE',
  currentPageNumber: number
}
type SetTotalUserCountAT = {
  type: 'friends/SET_TOTAL_USER_COUNT',
  totalUserCount: number
}
type setTogglePreloaderAT = {
  type: 'friends/SET_TOGGLE_PRELOADER'
  preloader: boolean
}


////Reducer///////////////////////////////
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

    case SET_USERS: {
      return {...state, cardFriends: [...action.users]}
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPageNumber: action.currentPageNumber
      }
    }

    case SET_TOTAL_USER_COUNT: {
      return {
        ...state,
        totalUserCount: action.totalUserCount
      }
    }

    case SET_TOGGLE_PRELOADER: {
      return {
        ...state,
        preloader: action.preloader
      }
    }
    default:
      return state
  }

}

// ActionCreator ///////////////////////
export const addFriendAC = (uId: number): AddFriendAT => {
  return {type: ADD_FRIEND, uId: uId}
}

export const delFriendAC = (uId: number): DelFriendAT => {
  return {type: DELETE_FRIEND, uId: uId}
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

export const setTotalUserCountAC = (totalUserCount: number): SetTotalUserCountAT => {
  return {
    type: SET_TOTAL_USER_COUNT,
    totalUserCount: totalUserCount
  }
}

export const setTogglePreloaderAC = (loader: boolean): setTogglePreloaderAT => {
  return {
    type: SET_TOGGLE_PRELOADER,
    preloader: loader
  }
}


/// Thunk /////////////////////////////////////////
export const getUsersTC = (currentPageNumber: number, pageSize: number): AppThunk => {
  return (dispatch) => {
    dispatch(setTogglePreloaderAC(true))
    userAPI.getUser(currentPageNumber, pageSize)
      .then((data) => {
        dispatch(setTogglePreloaderAC(false))
        dispatch(setUsersAC(data.items))
        dispatch(setCurrentPageNumberAC(currentPageNumber))
        dispatch(setTotalUserCountAC(data.totalCount))

      })
  }
}

export const delUserTC = (id: number): AppThunk => {
  return (dispatch) => {
    userAPI.deleteUser(id)
      .then((data) => {
        // обработка успешного запроса
        if (data.resultCode === 0) {
          dispatch(addFriendAC(id))
        }
      })
  }
}

export const addUserTC = (id: number): AppThunk => {
  return (dispatch) => {
    userAPI.addUser(id)
      .then((data) => {
        // обработка успешного запроса
        if (data.resultCode === 0) {
          dispatch(delFriendAC(id))
        }
      })
  }
}


export default friendsPageReducer