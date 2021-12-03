import { useEffect, useState } from 'react';
import { useAsyncFn } from 'react-use';
import Card from 'src/components/card';
import FormBuilder from 'src/components/form/FormBuilder';
import UserService from '../service';
import { columnsUserHistory, metaUserForm } from './props';
import { Alert, Button, Col, Form, Row, Skeleton } from 'antd';
import BaseTable from 'src/components/tables';
import useDialog from 'src/hooks/useDialog';
import SubmittedModal from './SubmittedModal';
import SkeletonButton from 'antd/lib/skeleton/Button';
import './style.less';
import Loading from 'src/components/loading';
import { normalizeUserEdit } from '../utils';

const UserView = () => {
    const [form] = Form.useForm();
    const [state, callback] = useAsyncFn(UserService.getInfo);
    const [isEditedMode, setIsEditedMode] = useState(false);
    const isReviewing = false;
    const [visible, { handleToggle }] = useDialog();
    const [isTouched, setIsTouched] = useState(false);
    const [formValues, setFormValues] = useState<any>({});

    useEffect(() => {
        callback();
    }, []);

    useEffect(() => {
        if (state.value) {
            form.setFieldsValue(normalizeUserEdit(state.value));
        }
    }, [state.value, form]);

    const handleEditInfo = () => {
        if (isEditedMode) {
            const values = form.getFieldsValue();
            console.log('values', values);
            setFormValues(values);
            handleToggle();
        } else {
            setIsEditedMode(true);
        }
    };

    const handleCancelFormEdit = () => {
        setIsEditedMode(false);
        form.setFieldsValue({ ...state.value });
    };

    return (
        <Card
            className="user-view"
            extra={
                <div>
                    {isEditedMode && (
                        <Button
                            onClick={handleCancelFormEdit}
                            style={{ marginRight: 8 }}
                            type="primary"
                            danger
                        >
                            Huỷ
                        </Button>
                    )}

                    <Button
                        loading={state.loading}
                        disabled={isReviewing || (isEditedMode && !isTouched)}
                        onClick={handleEditInfo}
                        type="primary"
                    >
                        {isEditedMode ? 'Gửi duyệt' : 'Sửa thông tin'}
                    </Button>
                </div>
            }
            title="Thông tin cá nhân"
        >
            {isReviewing && (
                <Alert
                    style={{ marginBottom: '24px' }}
                    type="warning"
                    message="Yêu cầu của bạn đang được xử lý"
                    description="Chúng tôi sẽ xử lý yêu cầu của bạn trong vòng 7 ngày làm việc"
                />
            )}

            <Form
                onFieldsChange={() => {
                    setIsTouched(true);
                }}
                form={form}
            >
                <FormBuilder form={form} meta={metaUserForm(!isEditedMode)} />
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
            <SubmittedModal handleToggle={handleToggle} formValues={formValues} visible={visible} />
        </Card>
    );
};
export default UserView;
