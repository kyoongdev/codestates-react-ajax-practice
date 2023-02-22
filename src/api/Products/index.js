import appClient from "../apiClient";

export const getProducts = () => {
  return appClient.get("/products");
};

export const getProduct = (id) => {
  return appClient.get(`/products/${id}`);
};
