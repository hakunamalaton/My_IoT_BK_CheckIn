import { useEffect } from 'react';
import Nanobar from 'nanobar';
import './style.less';

const nanobar = new Nanobar({ id: 'nano-bar' });

const LoadingBar = () => {
    useEffect(() => {
        return () => {
            nanobar.go(100);
        };
    }, []);
    return null;
};

export default LoadingBar;
