import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import browse from './browse';

const rootReducer = combineReducers({
  browse,
  routing
});

export default rootReducer;
