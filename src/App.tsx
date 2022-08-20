import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Redirect, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dropdown from "./components/Dropdown/Dropdown";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import {Login} from "./components/Login/Login";
import 'antd/dist/antd.css'
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType, TypedDispatch} from "./Redux/redux-store";
import {authUserTC} from "./Redux/authorizationReducer";


class App extends React.Component<any, AppStateType> {
  componentDidMount() {
    console.log(this)
    this.props.authUser()
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <div className="wrapper">
            <Sidebar/>
            <main className="content">
              <Route path="/" render={() => <Redirect to="/profile"/>}/>
              <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
              <Route path="/friends"
                     render={() => <FriendsContainer/>}/>
              <Route path="/dialogs"
                     render={() => <DialogsContainer/>}/>
              <Route path="/news" render={() => <News/>}/>
              <Route path="/music" render={() => <Music/>}/>
              <Route path="/settings" render={() => <Settings/>}/>
              <Route path="/login" render={() => <Login/>}/>
            </main>
          </div>
        </div>
        <Dropdown/>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({})
const mapDispatchToProps = (dispatch: TypedDispatch) => {
  return {
    authUser: () => {
      dispatch(authUserTC())
    },
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(App)
