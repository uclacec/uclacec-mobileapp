import * as types from './types.js';

export function addEvent(event) {
  return {
    type: types.ADD_EVENT,
    event
  };
}

export function removeEvent(event) {
  return {
    type: types.REMOVE_EVENT,
    event
  };
}

export const setVisibilityFilter = filter => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}
