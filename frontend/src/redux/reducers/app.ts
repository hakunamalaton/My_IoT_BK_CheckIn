import { SET_LOADING_APP } from '../actions/app';
import { AppState } from '../types';

const defaultState: AppState = {
    isAppLoading: false,
};

const appReducer = (state = defaultState, action): AppState => {
    const { type, payload } = action;
    switch (type) {
        case SET_LOADING_APP:
            return {
                ...state,
                isAppLoading: payload,
            };

        default:
            return state;
    }
};

export default appReducer;
