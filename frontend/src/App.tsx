import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingBar from './components/loadingBar';
import 'antd/dist/antd.css';
import './styles/index.less';

const LayoutApp = lazy(() => import('./layout'));
const LandingView = lazy(() => import('./modules/landing'));

const App = () => {
    return (
        <Suspense fallback={<LoadingBar />}>
            <Routes>
                <Route path="/" element={<LandingView />} />
                <Route path="/*" element={<LayoutApp />} />
            </Routes>
        </Suspense>
    );
};

export default App;
