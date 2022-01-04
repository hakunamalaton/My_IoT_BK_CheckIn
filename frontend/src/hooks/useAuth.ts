import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginApp } from 'src/redux/actions/auth';
import { authSelector } from 'src/redux/selectors/auth';

function useAuth() {
    const authState = useSelector(authSelector);
    const dispatch = useDispatch();

    const isLogged = useMemo(() => {
        return Boolean(authState.userId);
    }, [authState.userId]);

    const login = useCallback(async ({ username, password }) => {
        dispatch(loginApp(username, password));
    }, []);

    return {
        login,
        authState,
        isLogged,
        isLoading: authState.loginLoading,
        loginError: authState.loginError,
    };
}

export default useAuth;
