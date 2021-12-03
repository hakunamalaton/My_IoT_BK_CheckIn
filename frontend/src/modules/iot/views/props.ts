import { IMetaFormBuilder } from 'src/components/form/FormBuilder/FormBuilder';

export const metaIOTForm: IMetaFormBuilder = {
    formItemLayout: [4, 16],
    fields: [
        {
            name: 'ma',
            key: 'ma',
            label: 'Mã',
        },
        {
            name: 'name',
            key: 'name',
            label: 'Tên',
        },
        {
            name: 'vitri',
            key: 'vitri',
            label: 'Vị trí',
        },
        {
            name: 'ghichu',
            key: 'ghichu',
            label: 'Ghi chú',
        },
        {
            name: 'cauhinh',
            key: 'cauhinh',
            label: 'Cấu hình',
            widget: 'textarea',
            widgetProps: {
                rows: 4,
            },
        },
        {
            name: 'username',
            key: 'username',
            label: 'Username',
        },
        {
            name: 'password',
            key: 'password',
            label: 'Password',
            widgetProps: {
                type: 'password',
            },
        },
        {
            name: 'tinhtrang',
            key: 'tinhtrang',
            label: 'Tình trạng',
        },
        {
            name: 'use_cauhinh_chung_flag',
            key: 'use_cauhinh_chung_flag',
            label: 'Use cau hinh chung',
            widget: 'checkbox',
        },
    ],
};
