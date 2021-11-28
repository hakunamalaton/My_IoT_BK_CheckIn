import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/loading';
import LayoutApp from './layout';
import LoginView from './modules/login';
import { getSession } from './redux/actions/auth';
import { isAppLoadingSelector } from './redux/selectors/app';

import 'antd/dist/antd.css';
import './styles/index.less';

const App = () => {
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

export default App;
