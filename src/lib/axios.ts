import axios from "axios"

const BASE_URL = process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL as string
    : process.env.NEXT_PUBLIC_LOCAL_API_URL as string

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api