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
type addPostActionType = {
  newEl: string
  type: string
  newWords: string
  newMes: string
}
const profilePageAddPostReducer = (state: MessagesType, action: addPostActionType) => {
  console.log(state);
  console.log(action)
}
export default profilePageAddPostReducer