import { ColumnsType } from 'antd/lib/table';
import dayjs from 'dayjs';
import { IMetaFormBuilder } from 'src/components/form/FormBuilder/FormBuilder';

export const metaUserForm = (isDisabled: boolean): IMetaFormBuilder => {
    return {
        formItemLayout: [6, 12],
        disabled: isDisabled,
        fields: [
            {
                name: 'ho_lot',
                key: 'ho_lot',
                label: 'Họ',
            },
            {
                name: 'ten',
                key: 'ten',
                label: 'Tên',
            },
            {
                name: 'diachilienlac',
                key: 'diachilienlac',
                label: 'Địa chỉ liên lạc',
            },
            {
                name: 'lastupdatetime',
                key: 'lastupdatetime',
                label: 'Thời gian cập nhật',
                disabled: true,
            },
        ],
    };
};

export const metaUserSubmitForm = {
    formItemLayout: [6, 12],
    disabled: true,
    fields: [
        {
            name: 'ho_lot',
            key: 'ho_lot',
            label: 'Họ',
        },
        {
            name: 'ten',
            key: 'ten',
            label: 'Tên',
        },
    ],
};

export const columnsUserHistory: ColumnsType<any> = [
    {
        title: 'Id',
        dataIndex: 'id',
    },
    {
        title: 'Tên địa điểm',
        dataIndex: 'name',
    },
    {
        title: 'Nhiệt độ',
        dataIndex: 'nhietdo',
    },
    {
        title: 'Thời gian',
        dataIndex: 'thoigian',
    },
];
