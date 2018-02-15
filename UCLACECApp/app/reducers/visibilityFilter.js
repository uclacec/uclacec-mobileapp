import data from '../../data.json';
import * as types from '../actions/types.js';

const initialState = {
  filter: "EVENTS",
  events: data.events,
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
    switch (action.filter) {
      case 'CONCERTS':
        let concerts = initialState.events.filter((event) => (event.type == 'CONCERTS'));
        return Object.assign({ filter: 'CONCERTS' }, { events: concerts });
      case 'SPEAKERS':
        let speakers = initialState.events.filter((event) => (event.type == 'SPEAKERS'));
        return Object.assign({ filter: 'SPEAKERS' }, { events: speakers });
      case 'FILMS':
        let films = initialState.events.filter((event) => (event.type == 'FILMS'));
        return Object.assign({ filter: 'FILMS' }, { events: films });;
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
