import { Form, Input, Button, Checkbox, Typography, Alert } from 'antd';
import { useEffect } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import useAuth from 'src/hooks/useAuth';
import { ROUTE } from 'src/layout/props';
import './style.less';

const { Title } = Typography;

const LoginView = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const { login, loginError, isLogged, isLoading } = useAuth();

    const onFinish = (values: any) => {
        login(values);
    };
    const location = useLocation();

    useEffect(() => {
        if (isLogged) {
            navigate(location.state || '/');
        }
    }, [isLogged]);

    return (
        <div className="login-view">
            <div className="login-card">
                <Title style={{ textAlign: 'center', marginBottom: '24px' }} level={2}>
                    Welcome to <br /> Vaccine Dashboard
                </Title>

                <Form
                    name="basic"
                    form={form}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button loading={isLoading} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                    {loginError && (
                        <Alert
                            message="Đăng nhập thất bại"
                            description="Tên người dùng hoặc mật khẩu hoặc không đúng"
                            type="error"
                        />
                    )}
                </Form>
            </div>
        </div>
    );
};

export default LoginView;
