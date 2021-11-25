import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';
import Loading from './components/loading';
import LayoutApp from './layout';
import { getSession } from './redux/actions/auth';

import 'antd/dist/antd.css';
import './styles/index.less';

const App = () => {
    const { isLogged } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSession);
    }, []);

    if (!isLogged) return <Loading fixed />;

    return (
        <Routes>
            <Route path="/" element={<LayoutApp />} />
        </Routes>
    );
};

export default App;
