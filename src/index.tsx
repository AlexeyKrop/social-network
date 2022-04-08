import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {stateType} from './Redux/store';
import store from './Redux/redux-store';
import {Provider} from "react-redux";

export const rerender = (state: stateType) => {
  ReactDOM.render(
    <Provider store={store}> <App state={state} dispatch={store.dispatch.bind(store)}/></Provider>,

    document.getElementById('root')
  );
}
rerender(store.getState())
store.subscribe(() => {
  rerender(store.getState())
})
