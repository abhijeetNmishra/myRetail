import { BROWSE_DATA_LOAD, BROWSE_DATA_LOAD_SUCCESS } from '../actionTypes';

const initialState = {
  browse: {},
  isFetching: null
};

export default function browse(state, action) {
  if (state === undefined) return initialState;
  switch (action.type) {
    case BROWSE_DATA_LOAD:
      return Object.assign({}, state, {
        isFetching: true
      });
    case BROWSE_DATA_LOAD_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        browseData: action.browseData
      });
    default:
      return state;
  }
}
