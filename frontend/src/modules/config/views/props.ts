import { IMetaFormBuilder } from 'src/components/form/FormBuilder/FormBuilder';

export const metaConfigForm: IMetaFormBuilder = {
    formItemLayout: [4, 16],
    fields: [
        {
            name: 'config_group',
            key: 'config_group',
            label: 'Config Group',
        },
        {
            name: 'config_code',
            key: 'config_code',
            label: 'Config Code',
        },
        {
            name: 'config_value',
            key: 'config_value',
            label: 'Config Value',
        },
        {
            name: 'ghichu',
            key: 'ghichu',
            label: 'Ghi chú',
        },
        {
            name: 'last_update_time',
            key: 'last_update_time',
            label: 'Last Update Time',
        },
    ],
};
