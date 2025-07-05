import axios from "axios";

const client = axios.create({
    baseURL: 'https://fullstack-3-backend-1.onrender.com',
})

export default client;