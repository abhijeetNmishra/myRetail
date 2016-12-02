import { BROWSE_DATA_LOAD, BROWSE_DATA_LOAD_SUCCESS } from '../actionTypes';

function browseDataLoad() {
  return {
    type: BROWSE_DATA_LOAD
  };
}

function browseDataLoadSuccess(browseData) {
  return {
    type: BROWSE_DATA_LOAD_SUCCESS,
    browseData
  };
}

export default function fetchBrowseData(browseData) {
  return (dispatch, getState) => {
    dispatch(browseDataLoad());
    dispatch(browseDataLoadSuccess(browseData));
  };
}
