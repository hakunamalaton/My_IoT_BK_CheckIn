import { ACCOUNT_ROLE } from 'src/constants';

export interface AuthState {
    userId: number;
    userName: string;
    role?: ACCOUNT_ROLE;
    loginError: string;
    loginLoading: boolean;
}

export interface AppState {
    isAppLoading: boolean;
}

export interface StoreState {
    app: AppState;
    auth: AuthState;
}
