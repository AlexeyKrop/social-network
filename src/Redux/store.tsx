// import {rerender} from "..";
import classes from "../components/Dialogs/Dialogs.module.css";
import addMessagesInMessagePageReducer from "./addMessagesInMessagePageReducer";
import profilePageAddPostReducer from "./profilePageAddPostReducer";

type messageType = {
  user_name: string,
  message: string
  countLike: number,
  src: string,
  id: number,
}
type MessagesType = {
  messages: Array<messageType>
  updatePostInProfile: string
}
type UserDialogsItemType = {
  src: string
  name: string,
  id: number,
}
type MessageDialogsItemType = {
  src: string
  message: string,
  message_time: string,
  className: string,
  id: number,
}
type cardFriendType = {
  cardAvatar: string,
  cardBg: string,
  user_name: string,
  id: number,
}
type cardFriendsType = {
  cardFriends: Array<cardFriendType>
}
type PropsDialogsItemsType = {
  MessageDialogsItems: Array<MessageDialogsItemType>
  UserDialogsItems: Array<UserDialogsItemType>
  updateWordInMessagePage: string
}
type stateType = {
  ProfilePage: MessagesType
  MessagePage: PropsDialogsItemsType
  FriendsPage: cardFriendsType
}
type storeType = {
  _state: stateType,
  dispatch: Function,
  _callSubscriber: Function,
  subscribe: Function,
  getState(): stateType,
}
type dispatchActionType = {
  newEl: string
  type: string
  newWords: string
  newMes: string
}
const store: storeType = {
  _state: {
    ProfilePage: {
      messages: [
        {
          user_name: "Julie R. Morley",
          message: 'Done rut con leo ege males. Nella quits lorem ut libero dalesman fugitive. Done rut-rum tongue leo wget dalesman. Done rut-rum tongue leo wget dalesman. Present sapien massa convallis a pellentesque nec egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis.',
          countLike: 5,
          src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-2.jpg',
          id: 1,
        },
        {
          user_name: "Herta Smith",
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugiat labore nulla placeat reiciendis. A asperiores dignissimos illo libero, magnam natus, nostrum qui quibusdam rem saepe sint tempora totam voluptatibus! Ad at cum cumque doloremque ducimus eos eum exercitationem expedita id illum ipsa, ipsum iure minus nisi       odio officia quas quod recusandae saepe sunt, veritatis voluptates voluptatibus? Fugiat, laudantium',
          countLike: 8,
          src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-11.jpg',
          id: 2,
        },
      ],
      updatePostInProfile: '',
    },
    MessagePage: {
      UserDialogsItems: [
        {
          src: "https://templates.envytheme.com/zust/default/assets/images/user/user-13.jpg",
          name: "Matthew Voss",
          id: 1,

        },
        {
          src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
          name: "Lolita",
          id: 2,

        },
        {
          src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
          name: "Alex Piter",
          id: 3,

        },
        {
          src: "https://templates.envytheme.com/zust/default/assets/images/user/user-10.jpg",
          name: "James Smith",
          id: 4,
        },
      ],
      MessageDialogsItems: [
        {
          src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
          message: "Hello, dear I want talk to you?",
          message_time: "7 45 АМ",
          className: "",
          id: 1,
        },
        {
          src: "https://templates.envytheme.com/zust/default/assets/images/user/user-13.jpg",
          message: "Said how can I cooperate with you",
          message_time: "8 45 АМ",
          className: classes.chat__left,
          id: 2,
        },
        {
          src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
          message: "Hello, dear I want talk to you?",
          message_time: "9 45 АМ",
          className: "",
          id: 3,
        },
        {
          src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
          message: "I need some ideas from you about my design",
          message_time: "10 45 АМ",
          className: classes.chat__left,
          id: 4,
        }
      ],
      updateWordInMessagePage: '',
    },
    FriendsPage: {
      cardFriends: [
        {
          cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg',
          cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg',
          user_name: 'Jose Marroquin',
          id: 1
        },
        {
          cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-2.jpg',
          cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-2.jpg',
          user_name: 'Myrtle Lewis',
          id: 2
        },
        {
          cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-3.jpg',
          cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-3.jpg',
          user_name: 'Howard Tam',
          id: 3
        },
        {
          cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-4.jpg',
          cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-4.jpg',
          user_name: 'Kimberly Blum',
          id: 4
        },
        {
          cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-5.jpg',
          cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-5.jpg',
          user_name: 'Mary Mercado',
          id: 5
        },
        {
          cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-6.jpg',
          cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-6.jpg',
          user_name: 'Robert Ward',
          id: 6
        }
      ],
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },
  getState(): stateType {
    return this._state
  },
  subscribe(observer: any) {
    this._callSubscriber = observer
  },
  dispatch(action: dispatchActionType) {
    this._state.ProfilePage = profilePageAddPostReducer(this._state.ProfilePage, action)
    this._state.MessagePage = addMessagesInMessagePageReducer(this._state.MessagePage, action)
    this._callSubscriber(this._state)
  },
}


export default store
