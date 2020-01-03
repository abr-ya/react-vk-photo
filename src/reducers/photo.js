import {ADD_PHOTO} from '../actions/actionTypes';

const initialState = {
    items: [],
}
  
export function photoReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_PHOTO:
        return {
            ...state,
            items: [...state.items, ...action.payload],
        }
      default:
        return state
    }
}