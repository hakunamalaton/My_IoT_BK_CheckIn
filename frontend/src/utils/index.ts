export const buildParams = (data?: any) => {
    if (data) {
        const dataEdited = {
            ...data,
        };

        let queryData = {};
        try {
            queryData = Object.fromEntries(
                Object.entries(dataEdited).filter(([_, v]) => v != null && v !== '' && v !== -1),
            );
        } catch (err) {
            console.error('Có lỗi xảy ra: ', err);
        }

        return Object.keys(queryData)
            .map(key => {
                if (Array.isArray(queryData[key])) {
                    return `${key}=[${queryData[key]}]`;
                }
                if (typeof queryData[key] === 'object') {
                    return `${key}=${JSON.stringify(queryData[key])}`;
                }
                return `${key}=${encodeURIComponent(queryData[key])}`;
            })
            .join('&');
    }
    return '';
};

export function extend(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

export const buildURLWithParam = (url: string, query?: any) => {
    return url + '?' + buildParams(query);
};

export const removeFromArr = (arr: any[], value: any, key: string) => {
    if (!arr || !arr.length) {
        return arr;
    }
    let index;
    if (key) {
        index = arr.findIndex(item => item[key] === value);
    } else {
        index = arr.indexOf(value);
    }
    if (index < 0) {
        return arr;
    }
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export const findAndReplace = (arr: any[], value: any, key: string) => {
    if (!arr || !arr.length) {
        return arr;
    }
    let index;
    if (key) {
        index = arr.findIndex(item => item[key] === value[key]);
    }
    if (index < 0) {
        return arr;
    }
    arr[index] = value;
    return [...arr];
};

export const insertAt = (arr: any[], item: any, index = 0) => {
    return [...arr.slice(0, index), item, ...arr.slice(index)];
};
