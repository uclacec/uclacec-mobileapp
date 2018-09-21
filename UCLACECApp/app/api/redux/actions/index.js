import * as types from './types.js';
import * as pushNotifActions from '../../handlers/pushNotifs';
import fetch from 'cross-fetch';

export const addEvent = eventID => {
  return {
    type: types.ADD_EVENT,
    eventID
  };
};

export const removeEvent = eventID => {
  return {
    type: types.REMOVE_EVENT,
    eventID
  };
};

export const setEvents = events => {
  return {
    type: types.SET_EVENTS,
    events
  };
};

export const setVisibilityFilterAction = (filter, events) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter,
    events
  };
};

export const setVisibilityFilter = (filter, events) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch(setVisibilityFilterAction(filter, events));
        resolve();
      } catch(e) {
        reject(e);
      }
    })
      .then(() => {
        dispatch(clearLoadedImages());
      })
      .catch((e) => {
        console.log(e);
      });
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

export const clearLoadedImages = () => {
  return {
    type: types.CLEAR_LOADED_IMAGES,
  };
};


export const registerEvent = (event) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch(addEvent(event));
        resolve(event);
      } catch(e) {
        reject(e);
      }
    })
      .then((event) => {
        pushNotifActions.createPushNotif(event);
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

export const unregisterEvent = (event) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      try {
        dispatch(removeEvent(event));
        resolve(event);
      } catch(e) {
        reject(e);
      }
    })
      .then((event) => {
        pushNotifActions.deletePushNotif(event);
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
