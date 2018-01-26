import * as types from '../actions/types.js';

const initialState = [];

export default function myEvents(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EVENT:
      const newState = [...state];
      const newEvent = action.event;
      console.log(newEvent)
      newState.push(newEvent);
      console.log(newState);
      return newState;
    default:
      return state;
  }
};
