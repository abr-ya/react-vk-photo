import {call, put} from 'redux-saga/effects';
//import * as SagaActions from '../actions/SagaActions';
import * as UserActions from '../actions/UserActions'; //loginRequest, loginSuccess, loginFail
import * as api from '../api';

// это будет сага отображения сети
// action.payload - это id сети
export function* loginSaga(action) {
    //yield call(console.log, action);

    yield put(UserActions.loginRequest());
    
    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
        if (r.session) {
            let username = r.session.user.first_name;
            console.log('Привет,', username);
            //UserActions.loginSuccess(username);
        } else {
            console.log('Что-то пошло не так!');
            //put(UserActions.loginFail);
        }
    }, 4) // запрос прав на доступ к photo

    // if (!action.stations && action.id) {
    //     const response = yield call(api.requestStationsFromApi, action.id);
    //     yield put(actions.setNetStations(action.id, response.data.network.stations));
    // }
}

// тестовая сага - запрос сетей велосипедов
export function* initAppSaga() {
    yield call(console.log, 'INIT APP');
    const response = yield call(api.requestNetsFromApi);
    yield call(console.log, response);
    yield call(console.log, 'INIT APP done!');
}
