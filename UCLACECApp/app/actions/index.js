import * as types from './types.js';

export function addEvent() {
  return {
    type: types.ADD_EVENT
  };
}

export function removeEvent() {
  return {
    type: types.REMOVE_EVENT
  };
}
