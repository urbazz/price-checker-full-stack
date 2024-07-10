import {Datagrid, List, NumberField, SearchInput, TextField} from 'react-admin'

const filters = [
    <SearchInput source='name' alwaysOn key={'search'} placeholder='Поиск по названию'/>
]

export const ProductList = () => {
    return (
        <List filters={filters}>
            <Datagrid rowClick="show">
                <TextField source='name' label="Наименование товара"/>
                <TextField source='EAN' label="Штрих-код"/>
                <NumberField source='price' label="Цена"/>
            </Datagrid>
        </List>
    );
};
