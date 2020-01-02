import {call, put} from 'redux-saga/effects';
import * as SagaActions from '../actions/SagaActions';
import * as api from '../api';

// это будет сага отображения сети
// action.payload - это id сети
export function* displayNetSaga(action) {
    yield call(console.log, action);
    // if (!action.stations && action.id) {
    //     const response = yield call(api.requestStationsFromApi, action.id);
    //     yield put(actions.setNetStations(action.id, response.data.network.stations));
    // }
}

export function* initAppSaga() {
    yield call(console.log, 'INIT APP');
    const response = yield call(api.requestNetsFromApi);
    yield call(console.log, response);
    yield call(console.log, 'INIT APP done!');
    //yield put(actions.setNets(response.data.networks));
    //yield put(actions.selectNet(response.data.networks[0].id));
}
