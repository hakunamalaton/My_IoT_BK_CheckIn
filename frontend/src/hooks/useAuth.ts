import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from 'src/redux/selectors/auth';

function useAuth() {
    const authState = useSelector(authSelector);

    const isLogged = useMemo(() => {
        return Boolean(authState.userId);
    }, [authState.userId]);

    return {
        authState,
        isLogged,
    };
}

export default useAuth;
