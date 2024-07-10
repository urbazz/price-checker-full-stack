import axios from "axios"

export const api = async () => {
    try {
        const response = await axios.get(import.meta.env.VITE_REACT_PRODUCTS_URL);
        const data = response.data;
        return data;

    } catch (error) {
        console.log(error);
    }

}
