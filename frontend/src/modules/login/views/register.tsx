import { Button, Form } from 'antd';
import { Link } from 'react-router-dom';
import FormBuilder from 'src/components/form/FormBuilder';
import { ROUTE } from 'src/layout/props';
import LoginLayout from './layout';
import { metaRegisterForm } from './props';

const RegisterView = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        register(values);
    };
    const register = (values: any) => {};

    return (
        <LoginLayout title="Đăng ký tài khoản">
            <Form onFinish={onFinish} form={form}>
                <FormBuilder meta={metaRegisterForm} />
                <Form.Item>
                    <div className="btn-wrapper">
                        <Link to={ROUTE.LOGIN}>
                            <span>Đã có tài khoản?</span>
                        </Link>
                        <Button loading={false} type="primary" htmlType="submit">
                            Đăng ký
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </LoginLayout>
    );
};

export default RegisterView;
