import apiClient from "../apiClient";

export const getProducts = (params) =>{
    return apiClient.get("/products",params);
}

export const getProduct = (id) =>{
    return apiClient.get(`/products/${id}`);
}

