import { NumberField, Show, SimpleShowLayout, TextField } from "ra-ui-materialui";


export const ProductPage = () => {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="name"/>
                <NumberField source="price"/>
                <NumberField source="EAN"/>
                <TextField source="description"/>
            </SimpleShowLayout>
        </Show>
    )
};
