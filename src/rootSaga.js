import {takeLatest} from 'redux-saga/effects';
import * as actionTypes from './actions/actionTypes';
import * as sagas from './sagas/sagas';

export default function* rootSaga() {
	yield takeLatest(actionTypes.INIT_APP_SAGA, sagas.initAppSaga);	
	yield takeLatest(actionTypes.LOGIN_SAGA, sagas.loginSaga);
}
