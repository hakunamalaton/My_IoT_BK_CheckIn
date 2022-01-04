export const DOMAIN_API_URL = process.env.REACT_APP_API_URL || window.location.origin + '/api';
export const AFFIX_PATH = process.env.REACT_APP_AFFIX_PATH;
export const IS_PRODUCTION = process.env.REACT_APP_ENV === 'production';
export const DOMAIN = document.location.origin;
export const PAGE_SIZE = 20;

export enum ACCOUNT_ROLE {
    USER = 1,
    ADMIN = 2,
}
