import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const EditProduct = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="name" label="Наименование товара" />
                <NumberInput source="price" label="Цена"/>
                <TextInput source="EAN" label="Штрих-код"/>
                <TextInput source="description" fullWidth label="Описание товара" />
            </SimpleForm>
        </Edit>
    );
};

export default EditProduct;