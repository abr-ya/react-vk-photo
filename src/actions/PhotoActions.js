import {ADD_PHOTO} from './actionTypes';

export const addPhoto = items => ({
    type: ADD_PHOTO,
    payload: items,
});