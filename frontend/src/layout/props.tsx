import { IMenu } from '.';
import { ACCOUNT_ROLE } from 'src/constants';
import { IRoute } from 'src/routes';
import { lazy } from 'react';

const FeedbackModule = lazy(() => import('../modules/feedback'));
const DashboardModule = lazy(() => import('../modules/dashboard'));

export const ROUTE = {
    USER_INFO: '/userInfo',
    CENSOR_FEEDBACK: '/feedback',
    SEARCH_BY_TIME: '/search',
    SEARCH_AND_CHECK_IN: '/checkIn',
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
        name: 'Duyệt thông tin phản hồi',
        id: '20',
        roles: [ACCOUNT_ROLE.ADMIN],
        path: ROUTE.CENSOR_FEEDBACK,
    },
    {
        name: 'Tra cứu thông tin và check-in (cá nhân)',
        id: '21',
        roles: [ACCOUNT_ROLE.ADMIN],
        path: ROUTE.SEARCH_AND_CHECK_IN,
    },
    {
        name: 'Tra cứu thông tin theo thời gian',
        id: '22',
        roles: [ACCOUNT_ROLE.ADMIN],
        path: ROUTE.SEARCH_BY_TIME,
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
];
