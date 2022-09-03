import React, {Suspense} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Redirect, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dropdown from "./components/Dropdown/Dropdown";
import {Login} from "./components/Login/Login";
import 'antd/dist/antd.css'
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType, TypedDispatch} from "./Redux/redux-store";
import {initializedTC} from "./Redux/appReducer";
import {Preloader} from "./common/preloader/Preloader";

const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component<any, AppStateType> {
  componentDidMount() {
    this.props.initialized()
  }

  render() {
    if (!this.props.isInitialized) {
      return <Preloader/>
    }
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <div className="wrapper">
            <Sidebar/>
            <main className="content">
              <Route path="/" render={() =>
                <Suspense fallback={<Preloader/>}><Redirect to="/profile"/> </Suspense>}/>
              <Route path="/profile/:userId?" render={
                () => <Suspense fallback={<Preloader/>}><ProfileContainer/> </Suspense>}/>
              <Route path="/friends"
                     render={
                       () => <Suspense fallback={<Preloader/>}><FriendsContainer/> </Suspense>
                     }/>
              <Route path="/dialogs"
                     render={() => <Suspense fallback={<Preloader/>}> <DialogsContainer/> </Suspense>}/>
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

const mapStateToProps = (state: AppStateType) => ({
  isInitialized: state.appReducer.initialized
})
const mapDispatchToProps = (dispatch: TypedDispatch) => {
  return {
    initialized: () => {
      dispatch(initializedTC())
    },
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
)(App)
