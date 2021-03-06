import dialogsPageReducer, {
  ADD_MESSAGE,
  initialState,
  UPDATE_WORDS_IN_DIALOGS
} from "./dialogsPageReducer";

test('check add new message in dialogs', () => {

  const endState = dialogsPageReducer(initialState, {
    type: ADD_MESSAGE,
    newMes: 'hello',
  })
  expect(endState.MessageDialogsItems.length).toBe(5)
  expect(endState.MessageDialogsItems[4].message).toBe('hello')
})
test('check update word in dialogs', () => {
  // const action = {
  //   type: UPDATE_WORDS_IN_DIALOGS,
  //   newWords: 'h',
  // }
  const endState = dialogsPageReducer(initialState, {
    type: UPDATE_WORDS_IN_DIALOGS,
    newWords: 'h',
  })
  expect(endState.updateWordInMessagePage).toBe('h')
})