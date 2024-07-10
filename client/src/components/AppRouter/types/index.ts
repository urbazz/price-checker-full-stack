export enum routesEnum {
    SEARCH = '/',
    PRODUCT = '/product',
    ERROR = '/error',
    ADMIN = '/admin'
}

export interface IRoute {
    path: string;
    Component: React.FC;
    exact: boolean;
}