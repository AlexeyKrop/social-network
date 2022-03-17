import classes from "../components/Dialogs/Dialogs.module.css";

const state = {
  ProfilePage: {
    messages: [
      {
        message: 'hello world',
        countLike: 5,
        id: 1,
      },
      {
        message: 'hello how are you?',
        countLike: 8,
        id: 2,
      },
    ],
  },
  MessagePage: {
    UserDialogsItems: [
      {
        src: "https://templates.envytheme.com/zust/default/assets/images/user/user-13.jpg",
        name: "Matthew Voss",
        id: '1',

      },
      {
        src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
        name: "Lolita",
        id: '2',

      },
      {
        src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
        name: "Alex Piter",
        id: '3',

      },
      {
        src: "https://templates.envytheme.com/zust/default/assets/images/user/user-10.jpg",
        name: "James Smith",
        id: '4',
      },
    ],
    MessageDialogsItems: [
      {
        src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
        message: "Hello, dear I want talk to you?",
        message_time: "7 45 АМ",
        className: "",
        id: '1',
      },
      {
        src: "https://templates.envytheme.com/zust/default/assets/images/user/user-13.jpg",
        message: "Said how can I cooperate with you",
        message_time: "8 45 АМ",
        className: classes.chat__left,
        id: '2',
      },
      {
        src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
        message: "Hello, dear I want talk to you?",
        message_time: "9 45 АМ",
        className: "",
        id: '3',
      },
      {
        src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
        message: "I need some ideas from you about my design",
        message_time: "10 45 АМ",
        className: classes.chat__left,
        id: '4',
      }
    ],
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
}
export default state

export const addPost = (newEl: any) => {
  const newPost = {
    message: newEl,
    countLike: 0,
    id: 5,
  }
  state.ProfilePage.messages.push(newPost)
}