import {Datagrid, List, NumberField, SearchInput, TextField} from 'react-admin'

const filters = [
    <SearchInput source='name' alwaysOn key={'search'}/>
]

export const ProductList = () => {
    return (
        <List filters={filters}>
            <Datagrid rowClick="show">
                <TextField source='id'/>
                <TextField source='name' label="Наименование товара"/>
                <NumberField source='price' label="Цена"/>
            </Datagrid>
        </List>
    );
};
