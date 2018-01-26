import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import CECApp from './CECApp.js';

import * as reducers from '../reducers/index.js';

const reducer = combineReducers(reducers);
let store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CECApp />
      </Provider>
    );
  }
}
