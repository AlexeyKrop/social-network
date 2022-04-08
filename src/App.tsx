import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dropdown from "./components/Dropdown/Dropdown";
import Friends from './components/Friends/Friends';
import {stateType} from "./Redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type PropsStoreType = {
  state: stateType,
  dispatch: (store: stateType) => void
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
              <Route path="/profile" render={() => <Profile messageData={props.state.ProfilePage}
                                                            dispatch={props.dispatch}/>}/>
              <Route path="/friends"
                     render={() => <Friends cardFriends={props.state.FriendsPage.cardFriends}/>}/>
              <Route path="/dialogs"
                     render={() => <DialogsContainer UserDialogsItems={(props.state.MessagePage.UserDialogsItems)}
                                                     dispatch={props.dispatch}
                                                     MessageDialogsItems={props.state.MessagePage.MessageDialogsItems}/>}/>
              <Route path="/news" render={() => <News/>}/>
              <Route path="/music" render={() => <Music/>}/>
              <Route path="/settings" render={() => <Settings/>}/>
            </main>
          </div>
        </div>
        <Dropdown/>
      </div>
    </BrowserRouter>
  );
}

export default App;
