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
import LandingView from './modules/landing';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/*" element={<LayoutApp />} />
        </Routes>
    );
};

export default App;
