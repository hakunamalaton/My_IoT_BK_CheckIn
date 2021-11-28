import { StoreState } from '../types';

export const isAppLoadingSelector = (state: StoreState) => state.app.isAppLoading;
