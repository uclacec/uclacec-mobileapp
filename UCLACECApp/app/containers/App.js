import React, { Component } from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { persistReducer, persistStore, purge } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import { fetchData } from '../actions/index.js';
import reducers from '../reducers/index.js';
import CECApp from '../screens/CECApp.js';

import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from '../screens';


const persistConfig = {
  key: 'root',
  storage,
}

let store = compose(applyMiddleware(logger, thunkMiddleware))(createStore)(reducers);
store.dispatch(fetchData());

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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
          <CECApp />
      </Provider>
    );
  }
}
