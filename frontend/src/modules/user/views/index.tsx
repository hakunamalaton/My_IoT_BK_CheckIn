import { useEffect } from 'react';
import { useAsyncFn } from 'react-use';
import Card from 'src/components/card';
import FormBuilder from 'src/components/form/FormBuilder';
import UserService from '../service';
import { metaUserForm } from './props';
import { Form } from 'antd';

const UserView = () => {
    const [form] = Form.useForm();
    const [state, callback] = useAsyncFn(UserService.getInfo);

    useEffect(() => {
        callback();
    }, []);

    useEffect(() => {
        if (state.value) {
            form.setFieldsValue(state.value);
        }
    }, [state.value]);

    return (
        <Card title="Thông tin cá nhân">
            <Form form={form}>
                <FormBuilder form={form} viewMode meta={metaUserForm} />
            </Form>

            <h3>Địa điểm đã check-in</h3>
        </Card>
    );
};
export default UserView;
