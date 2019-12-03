import { combineReducers } from 'redux';
import gridViewReducer from './GridView/reducer';

const rootReducer = combineReducers({
  gridViewReducer,
});

export default rootReducer;
