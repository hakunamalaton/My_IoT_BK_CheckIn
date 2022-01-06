export const DOMAIN_API_URL = process.env.REACT_APP_API_URL || window.location.origin + '/api';
export const AFFIX_PATH = process.env.REACT_APP_AFFIX_PATH;
export const IS_PRODUCTION = process.env.REACT_APP_ENV === 'production';
export const DOMAIN = document.location.origin;
export const PAGE_SIZE = 20;

export enum ACCOUNT_ROLE {
    USER = 1,
    ADMIN = 2,
}

export const COLOR_PALETTE = [
    '#fd7f6f',
    '#7eb0d5',
    '#b2e061',
    '#bd7ebe',
    '#ffb55a',
    '#ffee65',
    '#beb9db',
    '#fdcce5',
    '#8bd3c7',
];
