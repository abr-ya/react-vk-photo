import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from './actionTypes';

export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (username, id) => ({
    type: LOGIN_SUCCESS,
    username,
    id,
});

export const loginFail = () => ({
    type: LOGIN_FAIL,
    error: true,
    payload: new Error('Ошибка авторизации'),
});
