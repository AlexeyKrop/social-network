import {combineReducers, createStore} from "redux";

import addMessagesInMessagePageReducer from "./addMessagesInMessagePageReducer";
import friendsPageReducer from "./friendsPageReducer";
import {profilePageReducer} from "./profilePageReducer";
import {authReducer} from "./authorization-reducer";

const rootReducer = combineReducers({
  ProfilePage: profilePageReducer,
  MessagePage: addMessagesInMessagePageReducer,
  FriendsPage: friendsPageReducer,
  Authorization: authReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);
export default store