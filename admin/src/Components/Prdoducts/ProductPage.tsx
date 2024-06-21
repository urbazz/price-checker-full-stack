import { NumberField, Show, SimpleShowLayout, TextField } from "ra-ui-materialui";
import { DeleteWithConfirmButton } from "react-admin";


export const ProductPage = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="name" label="Наименование товара"/>
                <NumberField source="price" label="Цена в рублях"/>
                <NumberField source="EAN" label="Штрих-код"/>
                <TextField source="description" label="Описание"/>
                <DeleteWithConfirmButton label="Удалить товар"/>
            </SimpleShowLayout>
        </Show>
    )
};
