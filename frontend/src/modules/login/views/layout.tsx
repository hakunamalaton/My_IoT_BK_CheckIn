import { Typography } from 'antd';
import { FC } from 'react';
import './style.less';

const { Title } = Typography;

interface LoginLayoutProps {
    title: string;
}
const LoginLayout: FC<LoginLayoutProps> = props => {
    const { children, title } = props;

    return (
        <div className="login-view">
            <div className="login-card">
                <Title style={{ textAlign: 'center', marginBottom: '24px' }} level={2}>
                    {title}
                </Title>

                {children}
            </div>
        </div>
    );
};

export default LoginLayout;
