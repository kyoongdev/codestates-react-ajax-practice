import apiClient from "../apiClient";

export const getProducts = ()=>{
    return apiClient.get("/products");
}

export const getProduct = (id)=>{
    return apiClient.get(`/products/${id}`);
}

export const searchProduct = (params) => {
    return apiClient.get("/products/search",{params,});
}