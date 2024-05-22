import { Table } from "antd";
import { FC } from "react";
import { IColumn, ITableData } from "../../types/types";

export const ProductTable:FC = () => {

    const dataSource:ITableData[] = [
        {
            key: 'title',
            descr: 'Англия',
            title: 'Страна'
        },
        {
            key: 'sugar',
            descr: 'Полусухой',
            title: 'Сахар'
        },
        {
            key: 'alc',
            descr: '4,5 %',
            title: 'Алкоголь'
        },
        {
            key: 'flavour',
            descr: 'Яблоко',
            title: 'Вкус'
        },
        {
            key: 'dev',
            descr: `Woodforde's Norfolk`,
            title: 'Производитель'
        },
        {
            key: 'pack',
            descr: 'Стекло',
            title: 'Упаковка'
        }
    ];

    const columns:IColumn[] = [
        {
            title: '',
            key: 'title',
            dataIndex: 'title'
        },
        {
            title: '',
            key: 'descr',
            dataIndex: 'descr'
        }
    ];

    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            showHeader={false}
        />
    )
}