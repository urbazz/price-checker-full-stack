import {Datagrid, List, NumberField, TextField} from 'react-admin'

export const ProductList = () => {
    return (
        <List>
            <Datagrid rowClick="show">
                <TextField source='id'/>
                <TextField source='name'/>
                <NumberField source='price'/>
            </Datagrid>
        </List>
    );
};
