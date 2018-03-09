import * as types from '../actions/types.js';

const initialState = {
  filter: "EVENTS",
  events: []
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EVENTS:
      return Object.assign({ filter: "EVENTS" }, { events: action.events });
    case types.SET_VISIBILITY_FILTER:
    switch (action.filter) {
      case 'CONCERTS':
        let concerts = action.events.filter((event) => (event.event_type == 'concerts'));
        return Object.assign({ filter: "CONCERTS" }, { events: concerts });
      case 'SPEAKERS':
        let speakers = action.events.filter((event) => (event.event_type == 'speakers'));
        return Object.assign({ filter: "SPEAKERS" }, { events: speakers });
      case 'FILMS':
        let films = action.events.filter((event) => (event.event_type == 'films'));
        return Object.assign({ filter: "FILMS" }, { events: films });;
      case 'SHOW_ALL':
        return initialState;

      default:
        return state;
    }
    default:
      return state;
  }
}

export default visibilityFilter;
