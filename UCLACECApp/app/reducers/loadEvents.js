import * as types from '../actions/types.js';

initialState = {
  isFetching: false,
  events: []
};

export default function loadEvents(state = initialState, action) {
  switch(action.type) {
    case types.REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        events: action.data,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
