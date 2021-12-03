import { IMetaFormBuilder } from 'src/components/form/FormBuilder/FormBuilder';

export const metaFilterAdvancedSearch: IMetaFormBuilder = {
    fields: [
        {
            name: 'date',
            key: 'date',
            widget: 'range-picker',
            widgetProps: {
                allowClear: true,
                style: {
                    width: '18rem',
                },
            },
        },
        {
            name: 'iotBot',
            key: 'iotBot',
            widget: 'select',
            widgetProps: {
                mode: 'multiple',
                placeholder: 'Chọn máy IoT',
                allowClear: true,
                style: {
                    width: '12rem',
                },
            },
            options: [
                { value: 'v1', label: 'label1' },
                { value: 'v2', label: 'label2' },
            ],
        },
    ],
};

export const data = [
    { firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
    { firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
    { firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' },
];
