import apiClient from "../apiClient";

//프로덕트 여러개(리스트)
export const getProducts = () => {
  return apiClient.get("/products");
};

//프로덕트 하나(상세)
export const getProduct = (id) => {
  return apiClient.get(`/products/${id}`);
};
