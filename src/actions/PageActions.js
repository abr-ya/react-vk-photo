import {SET_YEAR} from './actionTypes';

// export function setYear(year) {
//     return {
//       type: 'SET_YEAR',
//       payload: year,
//     }
// }

export const setYear = year => ({
    type: SET_YEAR,
    payload: year,
});