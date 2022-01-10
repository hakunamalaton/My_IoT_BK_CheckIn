import Card from 'src/components/card';
import BaseFilter from 'src/components/filter';
import { barChartCardData, barChartData, metaDashboardFilter, pieCardData, pieData } from './props';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
} from 'chart.js';
import { Col, Row } from 'antd';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const DashboardView = () => {
    const handleFilter = (filter: any) => {};

    return (
        <Card title="Dashboard">
            <BaseFilter meta={metaDashboardFilter} onFilter={handleFilter} isLoading={false} />
            <Row gutter={40}>
                <Col span={8}>
                    <Pie data={pieData} />
                </Col>
                <Col span={16}>
                    <Bar data={barChartData} />
                </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 64 }}>
                <Col span={16}>
                    <Bar data={barChartData} />
                </Col>
                <Col span={8}>
                    <Pie data={pieData} />
                </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 64 }}>
                <Col span={8}>
                    <Pie data={pieCardData} />
                </Col>
                <Col span={16}>
                    <Bar data={barChartCardData} />
                </Col>
            </Row>
        </Card>
    );
};

export default DashboardView;
