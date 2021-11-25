
export interface AuthState {
    userId: number,
    userName: string,
}

export interface AppState {
}

export interface StoreState {
    // app: AppState;
    auth: AuthState;
}
