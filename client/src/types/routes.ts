export interface IRoute {
    path: string;
    Component: React.FC;
    exact: boolean;
}