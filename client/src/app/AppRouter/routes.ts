import {Search, Product, Error} from "../../pages/index";
import { IRoute, routesEnum } from "./types";

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