import { Navigation } from 'react-native-navigation';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';
import * as reducers from '../reducers';

import CECApp from './CECApp';
import SideBar from './sidebar';

export default function (store, Provider) {
    Navigation.registerComponent('cecapp', () => CECApp, store, Provider);
    Navigation.registerComponent('sidebar', () => SideBar, store, Provider);
}