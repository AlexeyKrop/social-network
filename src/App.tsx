import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dropdown from "./components/Dropdown/Dropdown";
import Friends from './components/Friends/Friends';
type messageType = {
  message: string
  countLike: number,
  src: string,
  id: number,
}
type MessagesType = {
  messages: Array<messageType>
  updatePostInProfile: string
}
type UserDialogsItemType = {
  src: string
  name: string,
  id: number,
}
type MessageDialogsItemType = {
  src: string
  message: string,
  message_time: string,
  className: string,
  id: number,
}
type PropsDialogsItemsType = {
  MessageDialogsItems: Array<MessageDialogsItemType>
  UserDialogsItems: Array<UserDialogsItemType>
}
type cardFriendType = {
  cardAvatar: string,
  cardBg: string,
  user_name: string,
  id: number,
}
type cardFriendsType = {
  cardFriends: Array<cardFriendType>
}
type statesType = {
  ProfilePage: MessagesType
  MessagePage: PropsDialogsItemsType
  FriendsPage: cardFriendsType
}
type PropsType={
  getState(): statesType,
  addPost: any,
  addMessage: any,
  updateWordsInPostInProfile: any,
  updateWordsInMessageInDialog: any,
}
type PropsStoreType={
  store: PropsType
}
function App(props: PropsStoreType) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header/>
          <div className="wrapper">
            <Sidebar/>
            <main className="content">
              <Route path="/profile" render={() => <Profile messageData={props.store.getState().ProfilePage} addPost={props.store.addPost.bind(props.store)} updateWordsInPostInProfile={props.store.updateWordsInPostInProfile.bind(props.store)} />}/>
              <Route path="/friends" render={() => <Friends cardFriends={props.store.getState().FriendsPage.cardFriends}/>}/>
              <Route path="/dialogs" render={() => <Dialogs UserDialogsItems={(props.store.getState().MessagePage.UserDialogsItems)} addMessage={props.store.addMessage.bind(props.store)} MessageDialogsItems={props.store.getState().MessagePage.MessageDialogsItems} updateWordsInMessageInDialog={props.store.updateWordsInMessageInDialog.bind(props.store)}/>}/>
              <Route path="/news" render={() => <News />}/>
              <Route path="/music" render={() => <Music />}/>
              <Route path="/settings" render={() => <Settings />}/>
            </main>
          </div>
        </div>
        <Dropdown/>
      </div>
    </BrowserRouter>
  );
}

export default App;
