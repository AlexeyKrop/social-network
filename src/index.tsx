import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/state';

export const rerender = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
}
rerender()