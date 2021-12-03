import { Button, Form } from 'antd';
import Card from 'src/components/card';
import FormBuilder from 'src/components/form/FormBuilder';
import { metaConfigForm } from './props';

const ConfigView = () => {
    const [form] = Form.useForm();

    return (
        <Card title="Quản lý cấu hình">
            <Form form={form}>
                <FormBuilder form={form} meta={metaConfigForm} />
                <Form.Item wrapperCol={{ span: 6, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        Lưu
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};
export default ConfigView;
