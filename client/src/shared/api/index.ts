import axios from "axios";

export const api = async (sku: string, func: () => void) => {
    try {
        const {data} = await axios.get(`${import.meta.env.VITE_REACT_URL}/${sku}`);
        return data[0];
    } catch (error) {
        func();
    }
}