import { combineReducers } from 'redux';

import myEvents from './myEventsReducer.js';
import visibilityFilter from './visibilityFilter.js';

const reducers = combineReducers({
  myEvents,
  visibilityFilter
});

export default reducers;
