import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import dialogsPageReducer from "./dialogsPageReducer";
import friendsPageReducer from "./friendsPageReducer";
import {profilePageReducer} from "./profilePageReducer";
import {authReducer} from "./authorizationReducer";

const rootReducer = combineReducers({
  ProfilePage: profilePageReducer,
  MessagePage: dialogsPageReducer,
  FriendsPage: friendsPageReducer,
  Authorization: authReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store