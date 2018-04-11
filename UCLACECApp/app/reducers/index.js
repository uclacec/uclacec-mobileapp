import { combineReducers } from 'redux';

// import myEvents from './myEventsReducer.js';
// import visibilityFilter from './visibilityFilter.js';
import events from './events.js';
import loadEvents from './loadEvents.js';

const reducers = combineReducers({
  loadEvents,
  // myEvents,
  // visibilityFilter
  events
});

export default reducers;
