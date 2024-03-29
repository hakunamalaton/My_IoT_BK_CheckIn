import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/images/logo.png';
import { ReactComponent as SocialDistancing } from 'src/assets/images/social_distancing.svg';
import { ROUTE } from 'src/layout/props';
import './style.less';

const LandingView = () => {
    const navigate = useNavigate();
    return (
        <div className="landing-wrapper">
            <div className="container header ">
                <div className="logo-wrapper">
                    <img src={logo} alt="logo" />
                </div>
                <Button onClick={() => navigate(ROUTE.DASHBOARD)} size="large" type="primary">
                    Truy cập ứng dụng
                </Button>
            </div>

            <div className="body container">
                <div className="text-wrapper">
                    <h3>IoT Check-in</h3>
                    <p className="subTitle">Trường Đại học Bách khoa - Đại học Quốc gia TP.HCM</p>
                    <p
                        className="content"
                        dangerouslySetInnerHTML={{ __html: `<< Hệ thống đang được phát triển >>` }}
                    />
                </div>
                <div className="artwork">
                    <SocialDistancing />
                </div>
            </div>
        </div>
    );
};

export default LandingView;
