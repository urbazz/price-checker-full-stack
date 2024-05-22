import { Menu } from "antd";
import { FC } from "react";
import './Navigation.scss';

export const Navigation:FC<{
    onClick: () => void
}> = (props) => {
    return (
        <Menu
            theme='light'
            mode='horizontal'
            items={[
                 {
                    key: '1',
                    label: '< Назад'
                }
            ]}
            defaultSelectedKeys={['0']}
            className="nav"
            {...props}
        />
    )
}