import { combineReducers } from 'redux';

import myEvents from './myEventsReducer.js';
import visibilityFilter from './visibilityFilter.js';
import events from './events.js';

const reducers = combineReducers({
  events,
  myEvents,
  visibilityFilter
});

export default reducers;
