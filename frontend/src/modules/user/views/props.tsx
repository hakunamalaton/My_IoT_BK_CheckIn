import dayjs from 'dayjs';
import { IMetaFormBuilder } from 'src/components/form/FormBuilder/FormBuilder';

export const metaUserForm: IMetaFormBuilder = {
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
            name: 'lastupdatetime',
            key: 'lastupdatetime',
            label: 'Last Update Time',
            viewWidget: ({ value }) => dayjs.unix(value).format('DD/MM/YYYY HH:mm:ss'),
        },
    ],
};
