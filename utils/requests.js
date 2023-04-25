import axios from "axios";
// import { Message } from 'element-ui'

const publicRequest = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    accept: "application/json",
  },
});

publicRequest.interceptors.response.use((response) => {
  return response.data;
});

export default publicRequest;
