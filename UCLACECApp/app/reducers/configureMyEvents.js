import * as types from '../actions/types.js';

const initialState = [];

export default function configureMyEvents(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EVENT:
      return {
        ...state
        // add code to add event here
      };
    case types.REMOVE_EVENT:
      return {
        ...state
        // add code to remove that event here
      };
    default:
      return state;
  }
}
