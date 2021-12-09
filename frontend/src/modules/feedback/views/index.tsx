import { Tabs } from 'antd';
import Card from 'src/components/card';
import TabContent from './TabContent';

const FeedbackView = () => {
    return (
        <Card>
            <Tabs>
                <Tabs.TabPane tab="Chưa duyệt" key="1">
                    <TabContent key="1" />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Đã duyệt" key="2">
                    <TabContent key="1" />
                </Tabs.TabPane>
            </Tabs>
        </Card>
    );
};

export default FeedbackView;
