const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const UPDATE_WORDS_IN_DIALOGS = 'UPDATE_WORDS_IN_DIALOGS'
type addMessageActionType = {
  newEl: string
  type: string
  newWords: string
  newMes: string
}
let initialState = {
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
      id: 1,
    },
    {
      src: "https://templates.envytheme.com/zust/default/assets/images/user/user-13.jpg",
      message: "Said how can I cooperate with you",
      message_time: "8 45 АМ",
      id: 2,
    },
    {
      src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
      message: "Hello, dear I want talk to you?",
      message_time: "9 45 АМ",
      id: 3,
    },
    {
      src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
      message: "I need some ideas from you about my design",
      message_time: "10 45 АМ",
      id: 4,
    }
  ],
  updateWordInMessagePage: '',
}
const addMessagesInMessagePageReducer = (state = initialState, action: addMessageActionType) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      const newMessage = {
        src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
        message: action.newMes,
        message_time: '7:45',
        id: 6,
      }
      state.MessageDialogsItems.push(newMessage)
      return state
    case UPDATE_WORDS_IN_DIALOGS:
      state.updateWordInMessagePage = action.newWords;
      return state
    default:
      return state
  }
}
export const addMessageActionCreator = (message: string) => {
  return {type: 'UPDATE_MESSAGE', newMes: message}
}
export const updateWordsInDialogsActionCreator = (message: string) => {
  return {
    type: 'UPDATE_WORDS_IN_DIALOGS', newWords: message
  }
}
export default addMessagesInMessagePageReducer