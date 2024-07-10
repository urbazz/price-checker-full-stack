import { DataProvider } from "react-admin";
import { stringify } from "query-string";
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api';


export const dataProvider: DataProvider = {
    getList: async (resource, params) => {
      const {page, perPage} = params.pagination
      const {field, order} = params.sort
      const query = {
        sort: [field, order],
        range: (page - 1) * perPage,
        perPage,
        filter: params.filter.name
      }
      const url = `${apiUrl}/${resource}?${stringify(query)}`
      const {data} = await axios.get(url)

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

    update: async (resource, params) => {
        const url =`${apiUrl}/${resource}/${params.id}`
        const {data} = await axios.put(url, params.data)
        console.log(data)
        return {
          data: data
        }
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
        const url = `${apiUrl}/${resource}?${stringify(query)}`
        const data = await axios.delete(url)
        console.log(data)
      return { data: {} };
    }
} as DataProvider;