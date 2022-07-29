import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import dialogsPageReducer from "./dialogsPageReducer";
import friendsPageReducer, {ActionFriendPageReducerType} from "./friendsPageReducer";
import {profilePageReducer} from "./profilePageReducer";
import {ActionAuthorizationReducerType, authReducer} from "./authorizationReducer";
import {reducer as formReducer} from 'redux-form'
import {ActionsAppType, appReducer} from "./appReducer";

const rootReducer = combineReducers({
  ProfilePage: profilePageReducer,
  MessagePage: dialogsPageReducer,
  FriendsPage: friendsPageReducer,
  Authorization: authReducer,
  form: formReducer,
  appReducer: appReducer
})
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type AppActionsType = ActionFriendPageReducerType | ActionAuthorizationReducerType | ActionsAppType
export type AppDispatch = typeof store.dispatch;
export type AppStateType = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<AppStateType, any, AppActionsType>;
export type StoreType = typeof store
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
export default store
// @ts-ignore
window.store = store