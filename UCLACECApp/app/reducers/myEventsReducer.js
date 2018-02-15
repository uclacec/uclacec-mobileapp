import * as types from '../actions/types.js';

const initialState = [];

export default function myEvents(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EVENT:
      const newState = [...state];
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
        return newState;
      }

    case types.REMOVE_EVENT:
      const index = state.findIndex(x => x.title === action.event.title);
      return [...state.slice(0, index), ...state.slice(index + 1)];

    default:
      return state;
  }
};
