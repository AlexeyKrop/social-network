import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
let messages = [
  {
    message: 'hello world',
    countLike: 5,
    id: 1,
  },
  {
    message: 'hello how are you?',
    countLike: 8,
    id: 2,
  },
]

ReactDOM.render(
    <App messageData={messages}/>,
  document.getElementById('root')
);