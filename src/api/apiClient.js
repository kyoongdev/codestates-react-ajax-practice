import axios from "axios";
import config from "../config";

const apiClient = axios.create({
  baseURL: config.API_URL,
  timeout: 5_000,
});

//request 중간에 가로채는 역할
// apiClient.interceptors.request.use((req) => {
//   return req;
// });

export default apiClient;