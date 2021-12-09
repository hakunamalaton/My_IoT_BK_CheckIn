import { Modal } from 'antd';
import { FC } from 'react';

interface DetailModalProps {
    visible: boolean;
    closeModal: () => void;
}

const DetailModal: FC<DetailModalProps> = props => {
    return <Modal></Modal>;
};

export default DetailModal;
