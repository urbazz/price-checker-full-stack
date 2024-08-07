import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Loader = () => {
    return (
        <>
            {/* <Spin indicator={<LoadingOutlined spin />} size="large" /> */}
            <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />   
        </>
    );
};