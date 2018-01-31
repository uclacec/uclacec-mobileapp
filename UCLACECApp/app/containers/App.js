import React, { Component } from 'react';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';

import CECApp from './CECApp.js';

import * as reducers from '../reducers/index.js';

const reducer = combineReducers(reducers);
let store = compose(
  // autoRehydrate()
  applyMiddleware(logger)
)(createStore)(reducer);

persistStore(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CECApp />
      </Provider>
    );
  }
}
