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
  id: number,
}
type MessagesType = {
  messages: Array<messageType>
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
  state: statesType,
  addPost: any,
}
function App(props: PropsType) {
  console.log(props.state.MessagePage)
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header/>
          <div className="wrapper">
            <Sidebar/>
            <main className="content">
              <Route path="/profile" render={() => <Profile messageData={props.state.ProfilePage.messages} addPost={props.addPost}/>}/>
              <Route path="/friends" render={() => <Friends cardFriends={props.state.FriendsPage.cardFriends}/>}/>
              <Route path="/dialogs" render={() => <Dialogs UserDialogsItems={(props.state.MessagePage.UserDialogsItems)} MessageDialogsItems={props.state.MessagePage.MessageDialogsItems}/>}/>
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
