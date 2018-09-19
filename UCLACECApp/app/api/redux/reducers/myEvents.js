import * as types from '../actions/types.js';

const initialState = [];

export default function myEvents(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EVENT:
      const newState = [...state];
      const newEvent = action.eventID;
      var includes;
      newState.forEach((event) => {
        if (event == newEvent) {
          includes = true;
        }
      });
      if (includes)
        return state;
      else {
        newState.push(newEvent);
        return newState;
      }

    case types.REMOVE_EVENT:
      const index = state.findIndex(x => x === action.event);
      var newState = [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
      return newState;


    default:
      return state;
  }
};
