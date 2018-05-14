import * as types from '../actions/types.js';

const initialState = "EVENTS"

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
