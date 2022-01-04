import React from 'react';
import './style.less';

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    fixed?: boolean;
}

const Loading: React.FC<LoadingProps> = props => {
    const { fixed, ...rest } = props;

    return (
        <div className={`loading-wrapper ${fixed ? 'is-fixed' : ''}`} {...rest}>
            <div className="shapes-5"></div>
        </div>
    );
};
export default Loading;
