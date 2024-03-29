import {v1} from "uuid";
import {Dispatch} from "redux";
import {dialogsAPI} from "../api/api";
import {log} from "util";

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_WORDS_IN_DIALOGS = 'UPDATE_WORDS_IN_DIALOGS'

export type InitialStateInMessagePageType = {
  UserDialogsItems: Array<UserDialogsItemType>
  MessageDialogsItems: Array<MessageDialogsItemType>
  updateWordInMessagePage: string,
  messages: Array<string>
}
export let initialState: InitialStateInMessagePageType = {
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
  messages: []
}

const dialogsPageReducer = (state = initialState, action: AddMessageInDialogsAT): InitialStateInMessagePageType => {
  switch (action.type) {
    case "SET-MESSAGES":
      return {
        ...state,
        messages: [...state.messages, action.messages]
      }

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
    default:
      return state
  }
}

//ACTIONS
export const addMessageActionCreator = (message: string) => {
  return {type: 'ADD_MESSAGE', newMes: message}
}
export const setMessageAC = (messages: any) => ({type: 'SET-MESSAGES', messages} as const)
export const addMessageAC = () => ({type: 'ADD-MESSAGE'})
//THUNKS
export const setMessageTC = () => (dispatch: Dispatch) => {
  dialogsAPI.getDialogs()
    .then(res => dispatch(setMessageAC(res.data.items)))
}
export const addMessageTC = (id: number, message: any) => (dispatch: Dispatch) => {
  dialogsAPI.adMessage(id, message)
    .then(res => console.log(res.data))
}
//TYPE
type AddMessageAT = {
  type: 'ADD_MESSAGE'
  newMes: string
}
type UpdateWordsInDialogsAT = {
  type: 'UPDATE_WORDS_IN_DIALOGS'
  newWords: string
}
type AddMessageInDialogsAT = AddMessageAT | UpdateWordsInDialogsAT | FetchMessagesAT
export type UserDialogsItemType = {
  src: string
  name: string
  id: string
}
export type MessageDialogsItemType = {
  src: string
  message: string
  message_time: string
  id: string
}
export type FetchMessagesAT = ReturnType<typeof setMessageAC>
export default dialogsPageReducer