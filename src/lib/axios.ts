import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? (process.env.NEXT_PUBLIC_API_URL as string)
      : (process.env.NEXT_PUBLIC_LOCAL_API_URL as string),
  withCredentials: true,
});

export default api;
