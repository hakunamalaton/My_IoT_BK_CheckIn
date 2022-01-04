import { applyMiddleware, compose, createStore } from 'redux';
import { IS_PRODUCTION } from 'src/constants';
import RootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const composeWithDevTools =
    !IS_PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(RootReducer, composedEnhancer);

export default store;
