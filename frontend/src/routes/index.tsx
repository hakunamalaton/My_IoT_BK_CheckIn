import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ACCOUNT_ROLE } from 'src/constants';
import LoadingBar from 'src/components/loadingBar';
import AuthRoute from './AuthRoute';

export interface IRouteBase {
    id?: number;
    name?: string;
    icon?: string | any;
    path: string;
    container?: string;
    component?: any;
    redirect?: string;
    hideLink?: boolean;
    type?: string;
    roles?: ACCOUNT_ROLE[];
}

export interface IRoute extends IRouteBase {
    children?: IRoute[];
}

export function renderRoute(route: IRoute, role?: ACCOUNT_ROLE) {
    const { component: Component } = route;
    if (role && route.roles && !route.roles?.includes(role)) return null;
    return (
        <Route
            key={route.path}
            path={route.path}
            element={
                <AuthRoute route={route}>
                    <Component />
                </AuthRoute>
            }
        />
    );
}

export function renderRoutes(routes: IRoute[], role?: ACCOUNT_ROLE) {
    return (
        <Suspense fallback={<LoadingBar />}>
            <Routes>
                {routes.map(route => {
                    return renderRoute(route, role);
                })}
            </Routes>
        </Suspense>
    );
}

export function flattenRoute(routeList: IRoute[], deep: boolean): IRoute[] {
    const result: IRoute[] = [];

    for (const route of routeList) {
        result.push({
            ...route,
        });

        if (route.children && deep) {
            result.push(...flattenRoute(route.children, deep));
        }
    }

    return result;
}

export function getRouteList(routes): IRoute[] {
    const routeList = routes;

    if (routeList.length > 0) {
        return flattenRoute(routeList, true);
    }
    return [];
}

export function findRoutesByPaths(
    pathList: string[],
    routeList: IRoute[],
    basename?: string,
): IRoute[] {
    return routeList.filter(
        (child: IRoute) => pathList.indexOf((basename || '') + child.path) !== -1,
    );
}

export function getPagePathList(pathname?: string): string[] {
    return (pathname || window.location.pathname)
        .split('/')
        .filter(Boolean)
        .map((value, index, array) => '/'.concat(array.slice(0, index + 1).join('/')));
}
