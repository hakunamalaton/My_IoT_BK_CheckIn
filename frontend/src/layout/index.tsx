import { lazy, useEffect } from 'react';
import './style.less';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from 'src/components/loading';
import { getSession } from 'src/redux/actions/auth';
import { isAppLoadingSelector } from 'src/redux/selectors/app';

const LoginView = lazy(() => import('../modules/login'));
const LayoutApp = lazy(() => import('./layout'));

const AppWrapper = () => {
    const isAppLoading = useSelector(isAppLoadingSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSession);
    }, []);

    if (isAppLoading) return <Loading fixed />;

    return (
        <Routes>
            <Route path="/login" element={<LoginView />} />
            <Route path="/*" element={<LayoutApp />} />
        </Routes>
    );
};

export default AppWrapper;
