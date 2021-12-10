import { IMetaFormBuilder } from 'src/components/form/FormBuilder/FormBuilder';

export const metaLoginForm: IMetaFormBuilder = {
    formItemLayout: [24, 24],
    fields: [
        {
            key: 'username',
            name: 'username',
            label: 'Tên đăng nhập',
            message: 'Tên đăng nhập không được để trống',
            required: true,
        },
        {
            key: 'password',
            name: 'password',
            label: 'Mật khẩu',
            message: 'Mật khẩu không được để trống',
            widgetProps: {
                type: 'password',
            },
            required: true,
        },
    ],
};

export const metaRegisterForm: IMetaFormBuilder = {
    formItemLayout: [24, 24],
    fields: [
        {
            key: 'username',
            name: 'username',
            label: 'Tên đăng nhập',
            message: 'Tên đăng nhập không được để trống',
            required: true,
        },
        {
            key: 'password',
            name: 'password',
            label: 'Mật khẩu',
            message: 'Mật khẩu không được để trống',
            widgetProps: {
                type: 'password',
            },
            required: true,
        },
        {
            key: 'confirmPassword',
            name: 'confirmPassword',
            label: 'Xác nhận mật khẩu',
            message: 'Xác nhận mật khẩu không được để trống',
            widgetProps: {
                type: 'password',
            },
            required: true,
        },
    ],
};
