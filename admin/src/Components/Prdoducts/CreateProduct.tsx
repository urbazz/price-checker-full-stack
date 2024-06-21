import { Create, TextInput, SimpleForm } from "react-admin";

export const CreateProduct = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="name" label="Наименование товара"/>
                <TextInput source="price" label="Цена в рублях"/>
                <TextInput source="EAN" label="Штрих-код"/>
                <TextInput source="description" label="Описание" fullWidth/>
            </SimpleForm>
        </Create>
    );
};