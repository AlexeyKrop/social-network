import {v1} from "uuid";

const ADD_MESSAGE = 'ADD_MESSAGE';
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
      id: v1(),

    },
    {
      src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
      name: "Lolita",
      id: v1(),

    },
    {
      src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
      name: "Alex Piter",
      id: v1(),

    },
    {
      src: "https://templates.envytheme.com/zust/default/assets/images/user/user-10.jpg",
      name: "James Smith",
      id: v1(),
    },
  ],
  MessageDialogsItems: [
    {
      src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
      message: "Hello, dear I want talk to you?",
      message_time: "7 45 АМ",
      id: v1(),
    },
    {
      src: "https://templates.envytheme.com/zust/default/assets/images/user/user-13.jpg",
      message: "Said how can I cooperate with you",
      message_time: "8 45 АМ",
      id: v1(),
    },
    {
      src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
      message: "Hello, dear I want talk to you?",
      message_time: "9 45 АМ",
      id: v1(),
    },
    {
      src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
      message: "I need some ideas from you about my design",
      message_time: "10 45 АМ",
      id: v1(),
    }
  ],
  updateWordInMessagePage: '',
}
const addMessagesInMessagePageReducer = (state = initialState, action: addMessageActionType) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
        message: action.newMes,
        message_time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        id: v1(),
      }
      return {
        ...state,
        MessageDialogsItems: [...state.MessageDialogsItems, newMessage]
      }
    }
    case UPDATE_WORDS_IN_DIALOGS: {
      return {
        ...state,
        updateWordInMessagePage: action.newWords
      }

    }
    default:
      return state
  }
}
export const addMessageActionCreator = (message: string) => {
  return {type: 'ADD_MESSAGE', newMes: message}
}
export const updateWordsInDialogsActionCreator = (updateWordsInDialogs: string) => {
  return {
    type: 'UPDATE_WORDS_IN_DIALOGS', newWords: updateWordsInDialogs
  }
}
export default addMessagesInMessagePageReducer