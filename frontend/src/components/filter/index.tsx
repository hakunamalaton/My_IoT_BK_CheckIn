import { Form, Button } from 'antd';
import { FC } from 'react';
import FormBuilder from '../form/FormBuilder';
import { IMetaFormBuilder } from '../form/FormBuilder/FormBuilder';

interface BaseFilterProps {
    onFilter: (values: any) => void;
    normalizeFn?: (values: any) => any;
    isLoading: boolean;
    meta: IMetaFormBuilder;
}

const BaseFilter: FC<BaseFilterProps> = props => {
    const { onFilter, normalizeFn, isLoading, meta } = props;
    const [form] = Form.useForm();

    const handleSearch = values => {
        const filter = normalizeFn ? normalizeFn(values) : values;
        onFilter(filter);
    };

    return (
        <Form style={{ marginBottom: 24 }} onFinish={handleSearch} layout="inline" form={form}>
            <FormBuilder meta={meta} form={form} />

            <Form.Item>
                <Button loading={isLoading} htmlType="submit" type="primary">
                    Tìm kiếm
                </Button>
            </Form.Item>
        </Form>
    );
};

export default BaseFilter;
