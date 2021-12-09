import { ReactNode } from 'react';
import { Row } from 'antd';
import './style.less';

interface CardProps {
    className?: string;
    title?: string;
    hasLine?: boolean;
    isExtraLeft?: boolean;
    extra?: ReactNode;
    style?: any;
    rowClassName?: string;
    theme?: 'light';
}

const Card: React.FC<CardProps> = props => {
    const {
        children,
        className = '',
        title,
        hasLine = true,
        extra = null,
        rowClassName = 'mb-24',
        isExtraLeft = false,
        theme,
        ...rest
    } = props;

    const justify: any = isExtraLeft ? 'flex-start' : 'space-between';

    return (
        <div className={`v-card  ${className} ${theme ? 'is-' + theme : ''} `} {...rest}>
            {(title || extra) && (
                <div className="v-card__head">
                    <Row
                        justify={justify}
                        style={{ height: '100%' }}
                        align="middle"
                        className={rowClassName}
                    >
                        <h3>{title}</h3>
                        {extra}
                    </Row>
                </div>
            )}
            <div className="v-card__body">{children}</div>
        </div>
    );
};

export default Card;
