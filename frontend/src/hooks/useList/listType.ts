import { PaginationProps } from 'antd';
import { ResponseData } from 'src/constants/interface';

export type ListProps<T> = {
    fetchFn: (params: any) => Promise<ResponseData<T[]>>;
    isModal?: boolean;
    defaultFilters?: any;
    defaultPageSize?: number;
    initPage?: number;
    normalizeFilters?: (filters: any) => any;
};
export type ListState<T> = {
    pageSize: number;
    filters: any;
    total: number;
    currentPage: number;
    isFilterChanged: boolean;
    isFetched: boolean;
    isLoading: boolean;
    error: number;
    items: T[];
    type: string;
};

export interface ListActions {
    onPageChange: (props: PaginationProps) => void;
    onFilterChange: (param: any, forceRefetch?: boolean) => any;
    onRemoveItem: (item: any, keyId?: string) => void;
    onAddItem: (item: any, index?: number) => void;
    onEditItem: (item: any, key: string) => void;
    onUpdateList: (list: any[]) => void;
}
