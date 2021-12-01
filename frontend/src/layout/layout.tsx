import { Layout, Menu } from 'antd';
import useAuth from 'src/hooks/useAuth';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import { ACCOUNT_ROLE } from 'src/constants';
import { USER_MENU, ADMIN_MENU, mainRoutes } from './props';
import './style.less';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'src/routes';
import logo from 'src/assets/images/logo.png';

const { Header, Sider, Content } = Layout;

export type IMenu = {
    id: string;
    name: ReactNode;
    subTitle?: ReactNode;
    title?: string;
    path?: string;
    route?: string;
    exactPath?: string;
    icon?: ReactNode;
    iconHover?: ReactNode;
    children?: IMenu[];
    group?: IMenu[];
    roles?: ACCOUNT_ROLE[];
};

const LayoutApp = () => {
    const { authState } = useAuth();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const MENU = useMemo(() => {
        switch (authState.role) {
            // case ACCOUNT_ROLE.USER:
            //     return USER_MENU;
            // case ACCOUNT_ROLE.ADMIN:
            //     return ADMIN_MENU;
            default:
                return [...USER_MENU, ...ADMIN_MENU];
        }
    }, [authState.role]);

    const toggleSider = useCallback(() => setIsCollapsed(state => !state), []);

    return (
        <>
            <Header className="site-layout-header">
                <div className="layout-logo">
                    <div className="logo-wrapper image">
                        <img src={logo} alt="logo" />
                    </div>
                    <span> Thông tin Vaccine</span>
                </div>
                <div
                    className="layout-account"
                    style={{
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

            <Layout style={{ minHeight: 'calc(100vh - 48px)' }}>
                <Sider
                    breakpoint="md"
                    collapsedWidth={0}
                    width={280}
                    theme="light"
                    collapsible
                    onCollapse={toggleSider}
                    collapsed={isCollapsed}
                >
                    <Menu mode="inline" defaultSelectedKeys={[MENU[0]?.id]}>
                        {MENU.map(menu => (
                            <Menu.Item onClick={toggleSider} key={menu.id}>
                                <Link to={menu.path || ''}>{menu.name}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            // background: '#fff',
                            margin: '24px 16px',

                            // padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {renderRoutes(mainRoutes)}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default LayoutApp;
