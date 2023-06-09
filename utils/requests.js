import axios from "axios";

const publicRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
  headers: {
    accept: "application/json",
  },
});

publicRequest.interceptors.response.use((response) => {
  return response.data;
});

export default publicRequest;
