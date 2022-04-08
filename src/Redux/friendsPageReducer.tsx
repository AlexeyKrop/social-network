import {v1} from "uuid"

let initialState = {
  cardFriends: [
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg',
      user_name: 'Jose Marroquin',
      id: v1()
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-2.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-2.jpg',
      user_name: 'Myrtle Lewis',
      id: v1()
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-3.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-3.jpg',
      user_name: 'Howard Tam',
      id: v1()
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-4.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-4.jpg',
      user_name: 'Kimberly Blum',
      id: v1()
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-5.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-5.jpg',
      user_name: 'Mary Mercado',
      id: v1()
    },
    {
      cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-6.jpg',
      cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-6.jpg',
      user_name: 'Robert Ward',
      id: v1()
    }
  ],
}
const friendsPageReducer = (state = initialState, action: any) => {
  console.log(action)
  return state
}
export default friendsPageReducer