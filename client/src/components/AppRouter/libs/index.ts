import Product from "../../../pages/Product";
import Search from "../../../pages/Search";
import Error from "../../../pages/Error";
import { routesEnum } from '../types/index';
import { IRoute } from "../types/index";

export const routes:IRoute[] = [
    {
        path: routesEnum.SEARCH,
        Component: Search,
        exact: true
    },
    {
        path: routesEnum.PRODUCT+'/:id',
        Component: Product,
        exact: true
    },
    {
        path: routesEnum.ERROR,
        Component: Error,
        exact: true
    }
]
