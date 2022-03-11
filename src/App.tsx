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
type PostPropsType={
  messageData: Array<Object>;
}
function App(props: PostPropsType) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header/>
          <div className="wrapper">
            <Sidebar/>
            <main className="content">
              <Route path="/profile" render={() => <Profile messageData={props.messageData}/>}/>
              <Route path="/dialogs" render={() => <Dialogs />}/>
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
