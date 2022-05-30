export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SET_USERS = 'SET_USERS'
let initialState = {
  cardFriends: [] as Array<UserStateType>,
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
// export type InitialStateInFriendPageType = {
//   cardFriends: Array<UserStateType>
// }
type InitialStateInFriendPageType = typeof initialState
type ActionFriendPageReducerType = AddFriendAT | DelFriendAT | OpenModalInFriendAT | CloseModalInFriendAT | SetUsersAT
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
        cardFriends: [
          ...state.cardFriends.map((c) => {
            if (c.id === action.uId) {
              return {...c, sendMessageStatus: false};
            }
            return c
          })
        ]
      }
    }
    case CLOSE_MODAL: {
      return {
        cardFriends: [
          ...state.cardFriends.map((c) => {
            if (c.id === action.uId) {
              return {...c, sendMessageStatus: true};
            }
            return c
          })
        ]
      }
    }
    case SET_USERS: {
      return {...state, cardFriends: [...action.users]}
    }
  }
  return state
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
export default friendsPageReducer