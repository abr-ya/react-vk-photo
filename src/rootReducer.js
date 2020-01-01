import {combineReducers} from "redux";

import {pageReducer} from './reducers/page';
import {userReducer} from './reducers/user';

const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
})

export default rootReducer;
