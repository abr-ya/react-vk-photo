import * as actionTypes from './actionTypes';

// sagas actions
export const initApp = () => ({
    type: actionTypes.INIT_APP_SAGA,
});

export const displayNet = (id, stations) => ({
    type: actionTypes.DISPLAY_NET_SAGA,
    id,
    stations,
});
