import { combineReducers } from 'redux';

import events from './events.js';
import myEvents from './myEvents.js';
import visibilityFilter from './visibilityFilter.js';
import loadEvents from './loadEvents.js';

const reducers = combineReducers({
  events,
  myEvents,
  visibilityFilter,
  loadEvents,
});

export default reducers;
