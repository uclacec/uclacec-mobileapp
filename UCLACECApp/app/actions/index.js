import * as types from './types.js';
import fetch from 'cross-fetch';

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

export const requestData = () => {
  return {
    type: types.REQUEST_DATA,
  };
}
 
export const receiveData = (data) => {
  return {
    type: types.RECEIVE_DATA,
    receivedAt: Date.now(),
    data
  };
}

export const fetchData = () => {
  return (dispatch) => {
    dispatch(requestData());
    return fetch('http://new.uclacec.com/api/events.json')
    .then(data => data.json())
    .then(events => dispatch(receiveData(events)))
  }
}
