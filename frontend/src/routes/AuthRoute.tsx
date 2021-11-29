import React, { memo } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import { IRoute } from '.';

interface AuthProps {
    route: IRoute;
    children: React.ReactNode;
    // location: string;
}

function AuthRoute(props: AuthProps) {
    const { isLogged } = useAuth();
    // console.log('props', props);

    if (!isLogged) {
        // console.log('Not logged', isLogged);
        return (
            <Navigate
                to={{
                    pathname: '/login',
                }}
                state={props.route.path}
            />
        );
    }

    return <>{props.children}</>;
}

export default memo(AuthRoute);
