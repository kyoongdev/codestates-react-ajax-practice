import apiClient from "../apiClient";

export const getProducts = ()=>{
    return apiClient.get("/products");
}

export const getProduct = (id)=>{
    return apiClient.get(`/products/${id}`);
}