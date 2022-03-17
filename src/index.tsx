import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, {addMessage, addPost} from './Redux/state'
import App from './App';

export const rerender = () => {
  ReactDOM.render(
    <App state={state} addPost={addPost} addMessage={addMessage}/>,
    document.getElementById('root')
  );
}
rerender()