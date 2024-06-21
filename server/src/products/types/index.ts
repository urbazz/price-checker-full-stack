interface IFilter {
    name: string
}

interface IPagination {
    page: number
    perPage: number
}

interface ISort {
    field: string
    order: string
}

export interface IProductsQuery {
    filter: IFilter
    pagination: IPagination
    sort: ISort
}