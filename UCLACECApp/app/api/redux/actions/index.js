import * as types from './types.js';
import fetch from 'cross-fetch';

export const addEvent = eventID => {
  return {
    type: types.ADD_EVENT,
    eventID
  };
};

export const removeEvent = event => {
  return {
    type: types.REMOVE_EVENT,
    event
  };
};

export const setEvents = events => {
  return {
    type: types.SET_EVENTS,
    events
  };
};

export const setVisibilityFilter = (filter, events) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter,
    events
  };
};

export const requestData = () => {
  return {
    type: types.REQUEST_DATA,
  };
};
 
export const receiveData = (data) => {
  return {
    type: types.RECEIVE_DATA,
    receivedAt: Date.now(),
    data
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(requestData());
    return fetch('http://uclacec.com/api/events.json')
    .then(data => data.json())
    .then(events => {
      dispatch(receiveData(events));
      dispatch(setEvents(events));
    });
  }
};

export const imageLoaded = (image) => {
  return {
    type: types.IMAGE_LOADED,
    image,
  };
};
