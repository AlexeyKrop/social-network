import {v1} from "uuid"

export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL'
let initialState = {
  cardFriends: [
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg',
      user_name: 'Jose Marroquin',
      id: v1(),
      friendStatus: true,
      sendMessageStatus: false
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-2.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-2.jpg',
      user_name: 'Myrtle Lewis',
      id: v1(),
      friendStatus: true,
      sendMessageStatus: false
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-3.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-3.jpg',
      user_name: 'Howard Tam',
      id: v1(),
      friendStatus: false,
      sendMessageStatus: false
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-4.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-4.jpg',
      user_name: 'Kimberly Blum',
      id: v1(),
      friendStatus: true,
      sendMessageStatus: false
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-5.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-5.jpg',
      user_name: 'Mary Mercado',
      id: v1(),
      friendStatus: false,
      sendMessageStatus: false
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-6.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-6.jpg',
      user_name: 'Robert Ward',
      id: v1(),
      friendStatus: false,
      sendMessageStatus: false
    }
  ],
}
type actionFriendPageReducerType = {
  type: string, uId: string, friendStatus: boolean
}
const friendsPageReducer = (state = initialState, action: actionFriendPageReducerType) => {
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
  }

  return state
}
export const addFriendAC = (uId: string) => {
  return {type: ADD_FRIEND, uId: uId}
}
export const delFriendAC = (uId: string) => {
  return {type: DELETE_FRIEND, uId: uId}
}
export const openModalInFriendAC = (uId: string) => {
  return {type: OPEN_MODAL, uId: uId}
}
export const closeModalInFriendAC = (uId: string) => {
  return {type: CLOSE_MODAL, uId: uId}
}
export default friendsPageReducer