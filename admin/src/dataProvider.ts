import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';
const httpClient = fetchUtils.fetchJson;

export const dataProvider: DataProvider = {
    getList: async (resource, params) => {
      const {page, perPage} = params.pagination
      const {field, order} = params.sort
      const filter = params.filter.name ? {name: params.filter.name} : {}

      const query = {
        ...filter,
        page,
        perPage,
        sort: `${field}, ${order}`
      }

      const url = `${apiUrl}/${resource}`
      const {data} = await axios.get(url, {
        params: query
      })
      console.log(stringify(filter))
      return {
        data: data.data,
        total: data.total
      }
    },

    getOne: async (resource, {id}) => {
      const url =`${apiUrl}/${resource}/${id}`
       const {data} = await axios.get(url)
       
      return {
        data: data
      }
    },

    getMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const { json } = await httpClient(url);
      return ({ data: json });
    },

    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        const { headers, json } = await httpClient(url);
      return ({
        data: json,
        total: parseInt((headers.get('content-range') || "0").split('/').pop() || '0', 10),
      });
    },

    update: async (resource, params) => {
        const url =`${apiUrl}/${resource}/${params.id}`
        const {data} = await axios.put(url, params.data)
        console.log(data)
        return {
          data: data
        }
      },

    updateMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        const { json } = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
        method: 'PUT',
        body: JSON.stringify(params.data),
      });
      return ({ data: json });
    },

    create: async (resource, params) => {
        const url =`${apiUrl}/${resource}/`
        const {data} = await axios.post(url, params.data)
        console.log(params.data) 
        return {
          data: data
        }
    },

    delete: async (resource, {id}) => {
        const url =`${apiUrl}/${resource}/${id}`
         const {data} = await axios.delete(url)
         
        return {
          data: data
        }
    },

    deleteMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        const { json } = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
        method: 'DELETE',
      });
      return ({ data: json });
    }
} as DataProvider;