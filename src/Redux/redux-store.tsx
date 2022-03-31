import {combineReducers, createStore} from "redux";
import profilePageAddPostReducer from "./profilePageAddPostReducer";
import addMessagesInMessagePageReducer from "./addMessagesInMessagePageReducer";

let reducers = combineReducers({
  ProfilePage: profilePageAddPostReducer,
  MessagePage: addMessagesInMessagePageReducer,
})
let store = createStore(reducers);
export default store