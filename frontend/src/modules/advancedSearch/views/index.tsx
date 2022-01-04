import { Form, Button } from 'antd';
import { useCallback, useEffect } from 'react';
import { useAsyncFn } from 'react-use';
import Card from 'src/components/card';
import FormBuilder from 'src/components/form/FormBuilder';
import BaseTable from 'src/components/tables';
import { columnsUserHistory } from 'src/modules/user/views/props';
import AdvancedSearchService from '../service';
import { data, metaFilterAdvancedSearch } from './props';
import { CSVLink } from 'react-csv';

const AdvancedSearch = () => {
    const [form] = Form.useForm();
    const [formResult] = Form.useForm();
    const [state, callback] = useAsyncFn(AdvancedSearchService.getUser);

    const handleSearch = useCallback(values => {
        const { keyword } = values;
        callback(keyword);
    }, []);

    useEffect(() => {
        if (state.value) {
            formResult.setFieldsValue(state.value);
        }
    }, [state.value]);

    return (
        <Card title="Tra cứu nâng cao">
            <Form style={{ marginBottom: 24 }} onFinish={handleSearch} layout="inline" form={form}>
                <FormBuilder meta={metaFilterAdvancedSearch} form={form} />

                <Form.Item>
                    <Button loading={state.loading} htmlType="submit" type="primary">
                        Tìm kiếm
                    </Button>
                </Form.Item>
            </Form>

            <div
                className="is-flex"
                style={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}
            >
                <h3 style={{ marginBottom: 0 }}>Danh sách thông tin check-in</h3>
                <Button type="primary">
                    <CSVLink
                        data={data}
                        filename={'my-file.csv'}
                        className="btn btn-primary"
                        target="_blank"
                    >
                        Xuất file CSV
                    </CSVLink>
                </Button>
            </div>
            <BaseTable
                idKey="id"
                data={{
                    isLoading: state.loading,
                    items: [
                        { id: 1, name: 'Địa điểm 1' },
                        { id: 2, name: 'Địa điểm 2' },
                    ],
                }}
                columns={columnsUserHistory}
            />
        </Card>
    );
};

export default AdvancedSearch;
