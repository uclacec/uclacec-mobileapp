import React, { Component } from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Middlewares
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { persistReducer, persistStore, purge } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

// Reducers and actions
import { fetchData } from '../actions/index.js';
import reducers from '../reducers/index.js';

// Navigation
import { Navigation } from 'react-native-navigation';
import registerScreens from '../screens';

import CECApp from '../screens/CECApp.js';


// Configure persist
const persistConfig = {
  key: 'root',
  storage,
}

// Persist store + reducer
// const persistedReducer = persistReducer(persistConfig, reducers);
let store = compose(applyMiddleware(logger, thunkMiddleware))(createStore)(reducers);
// let persistor = persistStore(store);

// Configure navigation
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

// This calls our API to supply event data in our entry point
store.dispatch(fetchData());

export default class App extends Component {
  constructor(props) {
    super(props);
  }

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
