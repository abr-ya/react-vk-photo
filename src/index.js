import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/appContainer';
import {register} from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer';
//import {consoleLog} from './enhancers/console'; // <-- подключаем наш enhancer
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

// формируем свой список миддлеваров)
// consoleLog - последний в списке, не для продакшена
const middleware = [sagaMiddleware];

// 1.2 Advanced store setup
// необходимо установить расширение браузера: https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
));

sagaMiddleware.run(rootSaga);

// оборачиваем App в Provider, передаём Store
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
register();
