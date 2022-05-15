import addMessagesInMessagePageReducer, {
  ADD_MESSAGE,
  initialState,
  UPDATE_WORDS_IN_DIALOGS
} from "./addMessagesInMessagePageReducer";

test('check add new message in dialogs', () => {
  const action = {
    type: ADD_MESSAGE,
    newMes: 'hello',
  }
  const endState = addMessagesInMessagePageReducer(initialState, action)
  expect(endState.MessageDialogsItems.length).toBe(5)
  expect(endState.MessageDialogsItems[4].message).toBe('hello')
})
test('check update word in dialogs', () => {
  const action = {
    type: UPDATE_WORDS_IN_DIALOGS,
    newWords: 'h',
  }
  const endState = addMessagesInMessagePageReducer(initialState, action)
  expect(endState.updateWordInMessagePage).toBe('h')
})