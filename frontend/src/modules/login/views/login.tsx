import { Form, Button, Checkbox, Alert } from 'antd';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import FormBuilder from 'src/components/form/FormBuilder';
import useAuth from 'src/hooks/useAuth';
import { metaLoginForm } from './props';
import LoginLayout from './layout';
import { Link } from 'react-router-dom';
import { ROUTE } from 'src/layout/props';

const LoginView = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { login, loginError, isLogged, isLoading } = useAuth();
    const location = useLocation();

    const onFinish = (values: any) => {
        login(values);
    };

    useEffect(() => {
        if (isLogged) {
            navigate(location.state || '/');
        }
    }, [isLogged]);

    return (
        <LoginLayout title="Đăng nhập">
            <Form
                form={form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
            >
                <FormBuilder meta={metaLoginForm} />

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item className="justify-between" style={{ textAlign: 'center' }}>
                    <div className="btn-wrapper">
                        <Link to={ROUTE.REGISTER}>
                            <span>Chưa có tài khoản?</span>
                        </Link>
                        <Button loading={isLoading} type="primary" htmlType="submit">
                            Đăng nhập
                        </Button>
                    </div>
                </Form.Item>

                {loginError && (
                    <Alert
                        message="Đăng nhập thất bại"
                        description="Tên người dùng hoặc mật khẩu hoặc không đúng"
                        type="error"
                    />
                )}
            </Form>
        </LoginLayout>
    );
};

export default LoginView;
