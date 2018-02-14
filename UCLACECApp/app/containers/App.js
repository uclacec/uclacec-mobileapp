import React, { Component } from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import reducers from '../reducers/index.js';
import CECApp from '../screens/CECApp.js';

import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from '../screens';


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);
let store = compose(applyMiddleware(logger))(createStore)(persistedReducer);
let persistor = persistStore(store);

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
        <PersistGate loading={null} persistor={persistor}>
          <CECApp />
        </PersistGate>
      </Provider>
    );
  }
}
