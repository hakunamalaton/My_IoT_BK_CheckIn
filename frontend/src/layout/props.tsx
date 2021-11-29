import { IMenu } from '.';
import { ACCOUNT_ROLE } from 'src/constants';
import { IRoute } from 'src/routes';
import { lazy } from 'react';
import Component404 from 'src/modules/common/views/Component404';

const FeedbackModule = lazy(() => import('../modules/feedback'));
const DashboardModule = lazy(() => import('../modules/dashboard'));
const UserModule = lazy(() => import('../modules/user'));

export const ROUTE = {
    USER_INFO: '/userInfo',
    CENSOR_FEEDBACK: '/feedback',
    SEARCH: '/search',
    ADVANCED_SEARCH: '/advancedSearch',
    SETTING: '/setting',
    IOT: '/iot',
    DASHBOARD: '/',
};

export const USER_MENU: IMenu[] = [
    {
        name: 'Thông tin cá nhân',
        id: '10',
        roles: [ACCOUNT_ROLE.USER],
        path: ROUTE.USER_INFO,
    },
];

export const ADMIN_MENU: IMenu[] = [
    {
        name: 'Quản lý thông tin phản hồi',
        id: '20',
        roles: [ACCOUNT_ROLE.ADMIN],
        path: ROUTE.CENSOR_FEEDBACK,
    },
    {
        name: 'Tra cứu cá nhân',
        id: '21',
        roles: [ACCOUNT_ROLE.ADMIN],
        path: ROUTE.SEARCH,
    },
    {
        name: 'Tra cứu nâng cao',
        id: '22',
        roles: [ACCOUNT_ROLE.ADMIN],
        path: ROUTE.ADVANCED_SEARCH,
    },
    {
        name: 'Quản lý máy IoT',
        id: '23',
        roles: [ACCOUNT_ROLE.ADMIN],
        path: ROUTE.IOT,
    },
    {
        name: 'Quản lý cấu hình',
        id: '24',
        roles: [ACCOUNT_ROLE.ADMIN],
        path: ROUTE.SETTING,
    },
];

export const mainRoutes: IRoute[] = [
    {
        path: ROUTE.DASHBOARD,
        name: 'Dashboard',
        component: DashboardModule,
    },
    {
        path: ROUTE.CENSOR_FEEDBACK,
        name: 'feedback',
        component: FeedbackModule,
    },
    {
        path: ROUTE.USER_INFO,
        name: 'userInfo',
        component: UserModule,
    },
    {
        path: '*',
        name: '404',
        component: Component404,
    },
];
