import AuthService from 'src/modules/login/service';
import { setLoadingApp } from './app';

export const SET_USER_INFO = 'SET_USER_INFO';
export const LOG_OUT = 'LOG_OUT';
export const SET_LOADING_LOGIN = 'SET_LOADING_LOGIN';

export const setUserInfo = user => ({
    type: SET_USER_INFO,
    payload: user,
});

export const setLoadingLogin = loading => ({
    type: SET_LOADING_LOGIN,
    payload: loading,
});

export const getSession = async dispatch => {
    dispatch(setLoadingApp(true));
    try {
        const userInfo = await AuthService.getSession();
        dispatch(setUserInfo(userInfo));
    } catch (err) {
        // AuthService.login();
        // window.location.pathname = '/login';
    }
    dispatch(setLoadingApp(false));
};

export const loginApp = (userName: string, password: string) => async dispatch => {
    dispatch(setLoadingLogin(true));
    try {
        const res = await AuthService.login(userName, password);
        dispatch(setUserInfo(res));
    } catch (err) {}

    dispatch(setLoadingLogin(false));
};
