import axios from "axios";

export async function db() {return await axios.get('http://localhost:5000/api/products?limit=10')}