import { ACCOUNT_ROLE } from 'src/constants';

export interface AuthState {
    userId: number;
    userName: string;
    role?: ACCOUNT_ROLE;
}

export interface AppState {}

export interface StoreState {
    // app: AppState;
    auth: AuthState;
}
