import { IMetaFormBuilder } from 'src/components/form/FormBuilder/FormBuilder';

export const metaSearchProps: IMetaFormBuilder = {
    fields: [
        {
            name: 'keyword',
            key: 'keyword',
            required: true,
            message: 'Mã số SV/CB hoặc CCCD/CMND không được để trống',
            widgetProps: {
                placeholder: 'Vui lòng nhập mã số SV/CB hoặc CCCD/CMND',
                style: {
                    width: '22rem',
                },
            },
        },
    ],
};
