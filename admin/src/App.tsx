import {
  Admin,
  Resource,
} from "react-admin";
import  {dataProvider}  from "./dataProvider";
import { authProvider } from "./authProvider";
import {ProductList} from "./Components/Prdoducts/ProductList";
import {ProductPage} from "./Components/Prdoducts/ProductPage";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="products" list={ProductList} show={ProductPage} recordRepresentation="id"/>
  </Admin>
);
