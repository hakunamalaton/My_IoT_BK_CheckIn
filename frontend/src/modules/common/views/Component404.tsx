import { Result, Button } from 'antd';
import { useNavigate } from 'react-router';
import Card from 'src/components/card';
import { ROUTE } from 'src/layout/props';

const Component404 = () => {
    const navigate = useNavigate();
    return (
        <Card>
            <Result
                status="404"
                title="404"
                subTitle="Bạn vào trang nào thế? Về trang chủ thôi."
                extra={
                    <Button type="primary" onClick={() => navigate(ROUTE.DASHBOARD)}>
                        Về trang chủ
                    </Button>
                }
            />
        </Card>
    );
};

export default Component404;
