import axios from "axios";
import config from "../config";
const loginApiClient = axios.create({
    baseURL : config.LOGIN_API_URL,
    timeout: 5_000,
});

export default loginApiClient;