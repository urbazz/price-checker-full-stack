import axios from "axios";
// import db from './db.json'

export async function getProducts() {
    try {
        const response = await axios.get('./db.json');
        console.log(response.data)
    }

    catch(e) {
        console.error(e)
    }
} 