import apiClient from "../apiClient";

export const getProducts = (params) =>{
    return apiClient.get("/products",{
        params,
    });
}

export const getProduct = (id) =>{
    return apiClient.get(`/products/${id}`);
}


export const searchProduct = (params) => {

	return apiClient.get("/products/search",{
		params,
	});
};

/*export const createProduct = (body) => {
    return apiClient.post("/products/add");
}*/

