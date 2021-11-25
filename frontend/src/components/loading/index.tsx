import './style.less';

interface LoadingProps {
    fixed?: boolean;
}
const Loading: React.FC<LoadingProps> = (props) => {
    const { fixed } = props;

    return (
        <div className={`loading-wrapper ${fixed ? 'is-fixed' : ''}`}>
            <div className="shapes-5"></div>
        </div>
    );
};
export default Loading;
