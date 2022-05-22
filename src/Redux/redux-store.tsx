import {combineReducers, createStore} from "redux";
import profilePageAddPostReducer from "./profilePageAddPostReducer";
import addMessagesInMessagePageReducer from "./addMessagesInMessagePageReducer";
import friendsPageReducer from "./friendsPageReducer";

const rootReducer = combineReducers({
  ProfilePage: profilePageAddPostReducer,
  MessagePage: addMessagesInMessagePageReducer,
  FriendsPage: friendsPageReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);
export default store