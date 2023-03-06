import apiClient from "../loginApiClient";

//이때 body -> {email, password}
export const loginApi = (body) =>{
    return apiClient.post("/auth/login",body);
}
//이때 body -> {email, password,name}
export const registerApi = (body) =>{
    return apiClient.post("/auth/register",body);
}
