import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const EditProduct = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="name"/>
                <NumberInput source="price"/>
                <TextInput source="description"/>
                {/* <TextInput source=""/>
                <TextInput source=""/> */}
            </SimpleForm>
        </Edit>
    );
};

export default EditProduct;