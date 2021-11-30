import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import useAuth from 'src/hooks/useAuth';
import { ReactNode, useEffect, useMemo } from 'react';
import { ACCOUNT_ROLE } from 'src/constants';
import { USER_MENU, ADMIN_MENU, mainRoutes } from './props';
import './style.less';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'src/routes';
import { useSelector, useDispatch } from 'react-redux';
import Loading from 'src/components/loading';
import { getSession } from 'src/redux/actions/auth';
import { isAppLoadingSelector } from 'src/redux/selectors/app';

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

    const isAppLoading = useSelector(isAppLoadingSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSession);
    }, []);

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

    if (isAppLoading) return <Loading fixed />;

    return (
        <>
            <Header className="site-layout-header">
                <div className="layout-logo">Thông tin Vaccine</div>
                <div
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

            <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
                <Sider width={280} trigger={null} theme="light" collapsible>
                    <Menu mode="inline" defaultSelectedKeys={[MENU[0]?.id]}>
                        {MENU.map(menu => (
                            <Menu.Item key={menu.id}>
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
