import { useEffect, useMemo, useReducer } from 'react';
import { listReducer, listActions } from './listStore';
import { PAGE_SIZE } from 'src/constants';
import { ListActions, ListProps, ListState } from './listType';

const STATE_DEFAULT: ListState<any> = {
    items: [],
    total: 0,
    pageSize: 1,
    currentPage: 1,
    isLoading: false,
    isFetched: false,
    isFilterChanged: false,
    filters: {},
    error: 0,
    type: '',
};

export default function useList<T>(
    props: ListProps<T>,
    deps: any = [],
): [ListState<T>, ListActions] {
    const {
        fetchFn,
        defaultFilters = {},
        defaultPageSize = PAGE_SIZE,
        initPage,
        normalizeFilters,
    } = props;

    const [list, dispatch] = useReducer<React.Reducer<ListState<T>, any>>(listReducer, {
        ...STATE_DEFAULT,
        filters: defaultFilters || {},
        currentPage: initPage || 1,
        pageSize: defaultPageSize,
    });

    const { currentPage, filters, pageSize } = list;

    const actions = useMemo<ListActions>(() => {
        const a: ListActions = {
            onPageChange: pageProps => {
                dispatch(listActions.setPagePropsAction(pageProps));
            },

            onFilterChange: (obj = {}) => {
                dispatch(listActions.setFiltersAction(obj));
            },

            onRemoveItem: (item, keyId = 'id') => {
                dispatch(listActions.removeItemAction(item, keyId));
            },

            onAddItem: (item, index = 0) => {
                dispatch(listActions.addItemAction(item, index));
            },

            onEditItem: (item, key) => {
                dispatch(listActions.editItemAction(item, key));
            },

            onUpdateList: (list: T[] = []) => {
                dispatch(listActions.updateListAction(list));
            },
        };
        return a as ListActions;
    }, []);

    useEffect(() => {
        const normalized = normalizeFilters ? normalizeFilters(filters) : {};
        const params = {
            ...filters,
            ...normalized,
            limit: pageSize,
            offset: (currentPage - 1) * pageSize,
        };

        dispatch(listActions.setLoadingAction(true));
        fetchFn(params)
            .then(resp => {
                dispatch(listActions.fetchSuccessAction(resp));
            })
            .catch(error => {
                dispatch(listActions.fetchErrorAction(error));
            });
    }, [currentPage, pageSize, filters, , ...deps]);

    return [list, actions];
}
