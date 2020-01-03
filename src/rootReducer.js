import {combineReducers} from "redux";

import {pageReducer} from './reducers/page';
import {userReducer} from './reducers/user';
import {photoReducer} from './reducers/photo';

const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  photo: photoReducer,
})

export default rootReducer;
