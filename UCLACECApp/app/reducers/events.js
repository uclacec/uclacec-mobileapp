import * as types from '../actions/types.js';

const initialState = {
  myEvents: [],
  visibilityFilter: {
    filter: "EVENTS",
    events: []
  }
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EVENT:
      const newState = [...state.myEvents];
      const newEvent = action.event;
      var includes;
      newState.forEach((event) => {
        if (event.title == newEvent.title) {
          includes = true;
        }
      });
      if (includes) return newState;
      else {
        newState.push(newEvent);
        return Object.assign({}, state, { myEvents: newState });
      }

    case types.REMOVE_EVENT:
      const index = state.myEvents.findIndex(x => x.title === action.event.title);
      var newState = [
        ...state.myEvents.slice(0, index),
        ...state.myEvents.slice(index + 1)
      ];
      return Object.assign({}, state, { myEvents: newState });

    case types.SET_EVENTS:
      var visibilityObj = Object.assign({ filter: "EVENTS", events: action.events });
      return Object.assign({}, state, { visibilityFilter: visibilityObj });

    case types.SET_VISIBILITY_FILTER:
      switch (action.filter) {
        case 'CONCERTS':
          let concerts = action.events.filter((event) => (event.event_type == 'concerts'));
          var visibilityObj = Object.assign({ filter: "CONCERTS" }, { events: concerts });
          return Object.assign({}, state, { visibilityFilter: visibilityObj });
        case 'SPEAKERS':
          let speakers = action.events.filter((event) => (event.event_type == 'speakers'));
          var visibilityObj = Object.assign({ filter: "SPEAKERS" }, { events: speakers });
          return Object.assign({}, state, { visibilityFilter: visibilityObj });
        case 'FILMS':
          let films = action.events.filter((event) => (event.event_type == 'films'));
          var visibilityObj = Object.assign({ filter: "FILMS" }, { events: films });;
          return Object.assign({}, state, { visibilityFilter: visibilityObj });
        case 'EVENTS':
          var visibilityObj = Object.assign({ filter: "EVENTS" }, { events: action.events });
          return Object.assign({}, state, { visibilityFilter: visibilityObj });

        default:
          return state;
      }

    default:
      return state;
  }
};
