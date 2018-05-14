import * as types from '../actions/types.js';

const initialState = [];

export default function events(state = initialState, action) {
  switch (action.type) {
    case types.SET_EVENTS:
      return action.events;

    default:
      return state;
  }
};
