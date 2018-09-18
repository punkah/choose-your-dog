import { combineReducers } from 'redux';
import mainReducer from './Main.reducer';
import filterReducer from './Filter.reducer';

const rootReducer = combineReducers({
  breeds: mainReducer,
  images: filterReducer,
});

export default rootReducer;