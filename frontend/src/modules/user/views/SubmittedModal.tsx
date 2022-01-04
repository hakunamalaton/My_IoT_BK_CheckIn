import { Modal, Form } from 'antd';
import { FC, useEffect } from 'react';
import FormBuilder from 'src/components/form/FormBuilder';
import { metaUserForm, metaUserSubmitForm } from './props';

interface SubmittedModalProps {
    visible: boolean;
    formValues: any;
    handleToggle: () => void;
}

const SubmittedModal: FC<SubmittedModalProps> = props => {
    const { visible, formValues, handleToggle } = props;
    const [form] = Form.useForm();

    useEffect(() => {
        if (visible) {
            form.setFieldsValue(formValues);
        }
    }, [visible]);

    return (
        <Modal
            width="50vw"
            okText="Gửi duyệt"
            onCancel={handleToggle}
            visible={visible}
            title="Yêu cầu thay đổi thông tin của bạn"
        >
            <p>Bạn vui lòng kiểm tra lại thông tin trước khi gửi duyệt.</p>
            <Form className="submitted-form" form={form}>
                <FormBuilder form={form} meta={metaUserSubmitForm} />
            </Form>
        </Modal>
    );
};

export default SubmittedModal;
