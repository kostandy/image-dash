import { combineReducers } from 'redux';
import gridViewReducer from './GridView/reducer';

const rootReducer = combineReducers({
  gridView: gridViewReducer,
});

export default rootReducer;
