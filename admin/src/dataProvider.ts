import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';
const httpClient = fetchUtils.fetchJson;

export const dataProvider: DataProvider = {
    getList: async (resource) => {
        const url = `${apiUrl}/${resource}`;
        const {data} = await axios.get(url)
        // console.log(url)

        return {
            data: data.rows,
            total: data.count,
        };
    },

    getOne: async (id, resource) => {
      const url =`${apiUrl}/${resource}/${id}`
      const {data} = await axios.get(url)
      console.log(data.rows)
      return {
        data: data.rows
      };
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

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

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

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id } as any,
        })),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

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