import {
  Admin,
  Resource,
} from "react-admin";
import  {dataProvider}  from "./dataProvider";
import { authProvider } from "./authProvider";
import {ProductList} from "./Components/Prdoducts/ProductList";
import {ProductPage} from "./Components/Prdoducts/ProductPage";
import EditProduct from "./Components/Prdoducts/EditProduct";
import { CreateProduct } from "./Components/Prdoducts/CreateProduct";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource 
      name="products" 
      list={ProductList} 
      show={ProductPage} 
      recordRepresentation="id"
      edit={EditProduct}
      create={CreateProduct}
      
      options={{
        label: 'Товары'
      }}
    />
  </Admin>
);
