import { SET_USER_INFO, LOG_OUT, SET_LOADING_LOGIN } from '../actions/auth';
import { AuthState } from '../types';

const defaultState: AuthState = {
    userId: 0,
    userName: '',
    role: 0,
    loginError: '',
    loginLoading: false,
};

const authReducer = (state = defaultState, action): AuthState => {
    const { type, payload } = action;
    switch (type) {
        case SET_USER_INFO:
            return {
                ...state,
                ...payload,
            };

        case SET_LOADING_LOGIN:
            return {
                ...state,
                loginLoading: payload,
            };
        case LOG_OUT:
            return {
                ...defaultState,
            };

        default:
            return state;
    }
};

export default authReducer;
