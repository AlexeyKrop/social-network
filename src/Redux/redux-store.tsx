import {combineReducers, createStore} from "redux";
import profilePageAddPostReducer from "./profilePageAddPostReducer";
import addMessagesInMessagePageReducer from "./addMessagesInMessagePageReducer";
import friendsPageReducer from "./friendsPageReducer";

let reducers = combineReducers({
  ProfilePage: profilePageAddPostReducer,
  MessagePage: addMessagesInMessagePageReducer,
  FriendsPage: friendsPageReducer,
})
let store = createStore(reducers);
export default store