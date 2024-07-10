interface ISort {
    field: string,
    order: string
}

export interface IProductsQuery {
    page: number
    perPage: number
    range: number
    sort: ISort
    filter: string
}