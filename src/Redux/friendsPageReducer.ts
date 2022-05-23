export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const SET_USERS = 'SET_USERS'
let initialState: InitialStateInFriendPageType = {
  cardFriends: [
    // {
    //   cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg',
    //   cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg',
    //   user_name: 'Jose Marroquin',
    //   id: v1(),
    //   friendStatus: true,
    //   sendMessageStatus: false
    // },
    // {
    //   cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-2.jpg',
    //   cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-2.jpg',
    //   user_name: 'Myrtle Lewis',
    //   id: v1(),
    //   friendStatus: true,
    //   sendMessageStatus: false
    // },
    // {
    //   cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-3.jpg',
    //   cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-3.jpg',
    //   user_name: 'Howard Tam',
    //   id: v1(),
    //   friendStatus: false,
    //   sendMessageStatus: false
    // },
    // {
    //   cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-4.jpg',
    //   cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-4.jpg',
    //   user_name: 'Kimberly Blum',
    //   id: v1(),
    //   friendStatus: true,
    //   sendMessageStatus: false
    // },
    // {
    //   cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-5.jpg',
    //   cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-5.jpg',
    //   user_name: 'Mary Mercado',
    //   id: v1(),
    //   friendStatus: false,
    //   sendMessageStatus: false
    // },
    // {
    //   cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-6.jpg',
    //   cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-6.jpg',
    //   user_name: 'Robert Ward',
    //   id: v1(),
    //   friendStatus: false,
    //   sendMessageStatus: false
    // }
  ],
}
export type UserStateType = {
  cardAvatar: string,
  cardBg: string,
  user_name: string,
  id: string,
  friendStatus: boolean,
  sendMessageStatus: boolean
}
export type InitialStateInFriendPageType = {
  cardFriends: Array<UserStateType>
}
type ActionFriendPageReducerType = AddFriendAT | DelFriendAT | OpenModalInFriendAT | CloseModalInFriendAT | SetUsersAT
type AddFriendAT = {
  type: 'ADD_FRIEND', uId: string
}
type DelFriendAT = {
  type: 'DELETE_FRIEND', uId: string
}
type OpenModalInFriendAT = {
  type: 'OPEN_MODAL', uId: string
}
type CloseModalInFriendAT = {
  type: 'CLOSE_MODAL', uId: string
}
type SetUsersAT = {
  type: 'SET_USERS', users: Array<UserStateType>
}

const friendsPageReducer = (state = initialState, action: ActionFriendPageReducerType): InitialStateInFriendPageType => {
  switch (action.type) {
    case ADD_FRIEND: {
      return {
        cardFriends: [
          ...state.cardFriends.map((s) => {
            if (s.id === action.uId) {
              return {...s, friendStatus: !s.friendStatus};
            }
            return s
          }),
        ],
      }
    }
    case DELETE_FRIEND: {
      return {
        cardFriends: [
          ...state.cardFriends.map((s) => {
            if (s.id === action.uId) {
              return {...s, friendStatus: !s.friendStatus};
            }
            return s
          }),
        ],
      }
    }
    case OPEN_MODAL: {
      return {
        cardFriends: [
          ...state.cardFriends.map((c) => {
            if (c.id === action.uId) {
              return {...c, sendMessageStatus: !c.sendMessageStatus};
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
              return {...c, sendMessageStatus: !c.sendMessageStatus};
            }
            return c
          })
        ]
      }
    }
    case SET_USERS: {
      return {...state, cardFriends: [...state.cardFriends, ...action.users]}
    }
  }

  return state
}
export const addFriendAC = (uId: string): AddFriendAT => {
  return {type: ADD_FRIEND, uId: uId}
}
export const delFriendAC = (uId: string): DelFriendAT => {
  return {type: DELETE_FRIEND, uId: uId}
}
export const openModalInFriendAC = (uId: string): OpenModalInFriendAT => {
  return {type: OPEN_MODAL, uId: uId}
}
export const closeModalInFriendAC = (uId: string): CloseModalInFriendAT => {
  return {type: CLOSE_MODAL, uId: uId}
}
export const setUsersAC = (users: Array<UserStateType>): SetUsersAT => {
  return {type: SET_USERS, users: users}
}
export default friendsPageReducer