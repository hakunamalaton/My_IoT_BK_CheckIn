import { Button, Form } from 'antd';
import Card from 'src/components/card';
import FormBuilder from 'src/components/form/FormBuilder';
import { metaIOTForm } from './props';

const IoTView = () => {
    const [form] = Form.useForm();

    return (
        <Card title="Quản lý máy IoT">
            <Form form={form}>
                <FormBuilder form={form} meta={metaIOTForm} />
                <Form.Item wrapperCol={{ span: 6, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        Lưu
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};
export default IoTView;
