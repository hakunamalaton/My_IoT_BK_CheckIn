import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import useAuth from 'src/hooks/useAuth';

const { Header, Sider, Content } = Layout;

const LayoutApp = () => {
    const { authState } = useAuth();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider width={280} trigger={null} theme="light" collapsible>
                <div className="logo" />
                <Menu mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0, background: '#fff' }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            lineHeight: 'initial',
                            justifyContent: 'right',
                            height: '100%',
                            padding: '24px',
                        }}
                    >
                        Xin chào {authState.userName}
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        background: '#fff',
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutApp;
