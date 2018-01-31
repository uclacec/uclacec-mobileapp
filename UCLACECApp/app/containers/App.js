import React, { Component } from 'react';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';

import * as reducers from '../reducers';
import CECApp from '../screens/CECApp.js';

import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from '../screens';

const reducer = combineReducers(reducers);
let store = compose(
  // autoRehydrate()
  applyMiddleware(logger)
)(createStore)(reducer);

persistStore(store);

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'cecapp'
    },
    drawer: {
      left: {
        screen: 'sidebar'
      },
      style: {
        leftDrawerWidth: 20
      },
      type: 'MMDrawer',
      animationType: 'door',
      disableOpenGesture: false
    }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CECApp />
      </Provider>
    );
  }
}
