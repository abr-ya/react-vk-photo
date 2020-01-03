import {SET_YEAR} from '../actions/actionTypes';

const initialState = {
    year: 2019,
}
  
export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_YEAR:
          return {
            ...state,
            year: action.payload,
        }
        default:
            return state;
    }
}
