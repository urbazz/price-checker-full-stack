import {Datagrid, List, NumberField, TextField, ReferenceField} from 'react-admin'

export const ProductList = () => {
    return (
        <List>
            <Datagrid rowClick="show">
                <TextField source='id'/>
                <ReferenceField source={'Name'} reference={'id'} />
                <TextField source='name'/>
                <NumberField source='price'/>
            </Datagrid>
        </List>
    );
};
