import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:8888',
    headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGVJZCI6MSwiaWF0IjoxNzUxNDIxMTI0LCJleHAiOjE3NTE1MDc1MjR9.TkBEvrzOmqD7kWKHpjaQ-IXJijeFeUjRON8mUlOKYv0`
    }
})

export default client;