import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dropdown from "./components/Dropdown/Dropdown";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Login from "./components/Login/Login";
import {LoginFormik} from "./components/Login/LoginFormik";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header/>
          <div className="wrapper">
            <Sidebar/>
            <main className="content">
              <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
              <Route path="/friends"
                     render={() => <FriendsContainer/>}/>
              <Route path="/dialogs"
                     render={() => <DialogsContainer/>}/>
              <Route path="/news" render={() => <News/>}/>
              <Route path="/music" render={() => <Music/>}/>
              <Route path="/settings" render={() => <Settings/>}/>
              <Route path="/login" render={() => <LoginFormik/>}/>
            </main>
          </div>
        </div>
        <Dropdown/>
      </div>
    </BrowserRouter>
  );
}

export default App;
