import { ColumnsType } from 'antd/lib/table';
import { IMetaFormBuilder } from 'src/components/form/FormBuilder/FormBuilder';

export const feedbackTableColumns: ColumnsType<any> = [
    {
        dataIndex: 'id',
        title: 'ID',
    },
    {
        dataIndex: 'name',
        title: 'Họ tên',
    },
    {
        dataIndex: 'createdAt',
        title: 'Ngày gửi',
    },
];

export const metaFilterFeedback: IMetaFormBuilder = {
    fields: [
        {
            name: 'keyword',
            key: 'keyword',
            widgetProps: {
                placeholder: 'Nhập từ khóa cần tìm',
                style: {
                    width: '12rem',
                },
            },
        },
    ],
};
