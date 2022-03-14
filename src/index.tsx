import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from './Redux/state'
import App from './App';
ReactDOM.render(
    <App messageData={state.ProfilePage.messages} UserDialogsItems={state.MessagePage.UserDialogsItems} MessageDialogsItems={state.MessagePage.MessageDialogsItems} cardFriends={state.FriendsPage.cardFriends}/>,
  document.getElementById('root')
);