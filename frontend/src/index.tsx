import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/vi_VN';
import 'dayjs/locale/vi';
// import { AFFIX_PATH } from './constants';

ReactDOM.render(
    <Provider store={Store}>
        <React.StrictMode>
            <ConfigProvider locale={locale}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ConfigProvider>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
