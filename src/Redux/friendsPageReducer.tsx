import {v1} from "uuid"

const ADD_FRIEND = 'ADD_FRIEND';
let initialState = {
  cardFriends: [
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg',
      user_name: 'Jose Marroquin',
      id: v1(),
      friendStatus: 'Add Friend'
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-2.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-2.jpg',
      user_name: 'Myrtle Lewis',
      id: v1(),
      friendStatus: 'Add Friend'
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-3.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-3.jpg',
      user_name: 'Howard Tam',
      id: v1(),
      friendStatus: 'Add Friend'
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-4.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-4.jpg',
      user_name: 'Kimberly Blum',
      id: v1(),
      friendStatus: 'Add Friend'
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-5.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-5.jpg',
      user_name: 'Mary Mercado',
      id: v1(),
      friendStatus: 'Add Friend'
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-6.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-6.jpg',
      user_name: 'Robert Ward',
      id: v1(),
      friendStatus: 'Delete Friend'
    }
  ],
}
let stateClone;
const friendsPageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_FRIEND: {
      stateClone = {
        cardFriends: [
          ...state.cardFriends.map((s) => {
            return {...s};
          }),
        ],
      }
      stateClone.cardFriends.map(c => c.friendStatus === action.changeFriendStatus)
      return stateClone
    }
  }
  return state
}
export const addFriendAC = (changeFriendStatus: string) => {
  return {type: ADD_FRIEND, changeFriendStatus: changeFriendStatus}
}
export default friendsPageReducer