import {
    Menu,
    MenuProps
} from "antd";
import Sider from "antd/es/layout/Sider";
import {
    FC
} from "react";

export const AdminMenu: FC = () => {


    const categories = ['Алкогольные напитка', 'Безалкогольные напитки', 'Закуски'];

    const menuItems: MenuProps['items'] = categories.map(
        (item, index) => {
            const key = `Menu Item ${String(index + 1)}`

            return {
                key: key,
                label: item,

                 
            }
        }
    )

    return ( 
    <Sider >
        <Menu 
            mode = 'inline'
            defaultSelectedKeys = {['1']}
            items = {
                menuItems
            }
        />
    </Sider>
    )
}