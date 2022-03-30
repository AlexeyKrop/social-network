const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const UPDATE_WORDS_IN_DIALOGS = 'UPDATE_WORDS_IN_DIALOGS'
type UserDialogsItemType = {
  src: string
  name: string,
  id: number,
}
type MessageDialogsItemType = {
  src: string
  message: string,
  message_time: string,
  id: number,
}
type PropsDialogsItemsType = {
  MessageDialogsItems: Array<MessageDialogsItemType>
  UserDialogsItems: Array<UserDialogsItemType>
  updateWordInMessagePage: string
}
type addMessageActionType = {
  newEl: string
  type: string
  newWords: string
  newMes: string
}
const addMessagesInMessagePageReducer = (state: PropsDialogsItemsType, action: addMessageActionType) => {
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