import * as types from '../actions/types.js';
var _ = require('lodash');

initialState = {
  isFetching: false,
  imagesLoaded: {
    allLoaded: false,
    imageIds: [],
  },
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
      });
    case types.IMAGE_LOADED:
      let newState = _.clone(state.imagesLoaded.imageIds);
      newState.push(action.image);
      return Object.assign({}, state, {
        imagesLoaded: {
          allLoaded: newState.length > 10,
          imageIds: newState,
        }
      });
    default:
      return state;
  }
}
