import { Button, Space } from 'antd';
import { FC } from 'react';
import BaseFilter from 'src/components/filter';
import BaseTable from 'src/components/tables';
import { feedbackTableColumns, metaFilterFeedback } from './props';

interface TabContentProps {}

const TabContent: FC<TabContentProps> = () => {
    const columnProps = [
        ...feedbackTableColumns,
        {
            title: '',
            render: (text, record) => {
                return (
                    <Space>
                        <Button>Chi tiết</Button>
                    </Space>
                );
            },
        },
    ];

    const handleSearch = values => {};
    return (
        <div>
            <BaseFilter onFilter={handleSearch} meta={metaFilterFeedback} isLoading={false} />
            <BaseTable
                data={{
                    items: [
                        { id: 1, name: 'Nguyen Van A' },
                        { id: 2, name: 'Nguyen Van B' },
                    ],
                }}
                columns={columnProps}
                idKey="id"
            />
        </div>
    );
};

export default TabContent;
