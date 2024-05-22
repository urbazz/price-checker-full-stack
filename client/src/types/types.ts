export type FixedString<N extends number, S> = { 0: S, length: N } & S;

export type Numbers = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0';

export type EAN = FixedString<13, Numbers>

export interface IColumn {
    title: string,
    dataIndex: string,
    key: string,
}

export interface ITableData {
    key: string;
    title: string;
    descr: string
}