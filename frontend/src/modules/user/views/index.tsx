import { useEffect } from 'react';
import { useAsyncFn } from 'react-use';
import Card from 'src/components/card';
import FormBuilder from 'src/components/form/FormBuilder';
import UserService from '../service';
import { columnsUserHistory, metaUserForm } from './props';
import { Form } from 'antd';
import BaseTable from 'src/components/tables';

const UserView = () => {
    const [form] = Form.useForm();
    const [state, callback] = useAsyncFn(UserService.getInfo);

    useEffect(() => {
        callback();
    }, []);

    useEffect(() => {
        if (state.value) {
            console.log('state.value', state.value);
            form.setFieldsValue({ ...state.value });
        }
    }, [state.value, form]);

    return (
        <Card title="Thông tin cá nhân">
            <Form form={form}>
                <FormBuilder form={form} meta={metaUserForm} />
            </Form>

            <h3>Địa điểm đã check-in</h3>
            <BaseTable
                idKey="id"
                data={{
                    items: [
                        { id: 1, name: 'Địa điểm 1' },
                        { id: 2, name: 'Địa điểm 2' },
                    ],
                }}
                columns={columnsUserHistory}
            />
        </Card>
    );
};
export default UserView;
