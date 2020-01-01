import {ADD, ADD_NUM} from './actionTypes';

export const add = () => ({
    type: ADD
});

export const addNum = number => ({
    type: ADD_NUM,
    payload: number,
});
