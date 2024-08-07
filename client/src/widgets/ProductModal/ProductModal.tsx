import { FC } from 'react';
import { Button, Modal } from 'antd';

export const ProductModal:FC<{
    open: boolean
    description: string
    onCancel: () => void
}> = (props) => {
    return (
        <Modal
        open={props.open}
        onCancel={props.onCancel}
        footer = {
            <Button type='primary' onClick={props.onCancel}>Закрыть</Button>
        }
        >
            <p className="product-descr">{props.description}</p>
        </Modal>
    );
};