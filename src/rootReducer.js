//import { combineReducers } from "redux";
import {ADD, ADD_NUM} from './actions/actionTypes';

// при объединении
// import {combineReducers} from 'redux';
// import counter1 from 'path-to-file';
// import counter2 from 'path-to-file';

// export default combineReducers({
//     counter1, counter2
// })


const initialState = {
    counter: 0,
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
        case ADD_NUM:
            return {
                counter: state.counter + action.payload
            }
        default:
            return state;
    }
}
