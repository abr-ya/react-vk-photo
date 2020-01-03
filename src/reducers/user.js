import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/actionTypes';

const initialState = {
    name: '',
    id: 0,
    error: '', // для сохранения текста ошибки
    isFetching: false, // для реакции на статус "загружаю" или нет
}
  
export function userReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, isFetching: true, error: '' }
  
      case LOGIN_SUCCESS:
        return { ...state, isFetching: false, name: action.username, id: action.id}
  
      case LOGIN_FAIL:
        return { ...state, isFetching: false, error: action.payload.message }
  
      default:
        return state
    }
}
