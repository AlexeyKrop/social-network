import friendsPageReducer, {ADD_FRIEND, UserStateType} from "./friendsPageReducer";

test('check add friend', () => {
  let startState = {
    cardFriends: [{
      id: 0,
      name: 'Alex',
      followed: false
    }] as Array<UserStateType>,
    currentPageNumber: 1,
    pageSize: 21,
    totalUserCount: 30,
    preloader: false
  }
  const action = {
    type: ADD_FRIEND,
    uId: 0,
    followed: true
  } as const
  const endState = friendsPageReducer(startState, action)
  expect(endState.cardFriends[0].followed).toBe(true)
})

