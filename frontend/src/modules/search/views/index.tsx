import { Form, Button, Input } from 'antd';
import { useCallback, useEffect } from 'react';
import { useAsyncFn } from 'react-use';
import Card from 'src/components/card';
import BaseFilter from 'src/components/filter';
import FormBuilder from 'src/components/form/FormBuilder';
import Loading from 'src/components/loading';
import BaseTable from 'src/components/tables';
import { columnsUserHistory, metaUserForm } from 'src/modules/user/views/props';
import SearchService from '../service';
import { metaSearchProps } from './props';

const SearchView = () => {
    const [form] = Form.useForm();
    const [formResult] = Form.useForm();
    const [state, callback] = useAsyncFn(SearchService.getUser);

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
        <Card title="Tra cứu cá nhân">
            <BaseFilter meta={metaSearchProps} isLoading={state.loading} onFilter={handleSearch} />

            {!state.value && !state.loading ? null : state.loading ? (
                <Loading style={{ marginTop: 80 }} />
            ) : (
                <>
                    <Form form={formResult}>
                        <FormBuilder form={form} meta={metaUserForm(true)} />
                    </Form>

                    <h3 style={{ marginBottom: 16 }}>Địa điểm đã check-in</h3>
                    <BaseTable
                        idKey="id"
                        data={{
                            items: [
                                { id: 1, name: 'Địa điểm 1' },
                                { id: 2, name: 'Địa điểm 2' },
                            ],
                        }}
                        columns={columnsUserHistory}
                    />
                </>
            )}
        </Card>
    );
};

export default SearchView;
