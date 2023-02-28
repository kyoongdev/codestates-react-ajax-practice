import apiClient from "../apiClient";

//end point까지
//MEMO: 프로덕트 여러개(리스트)
export const getProducts = () => {
  return apiClient.get("/products");
};

//MEMO: 프로덕트 하나 (상세)
export const getProduct = (id) => {
  return apiClient.get(`/products/${id}`);
};

/** 
 * GET요청요청은 두번째 인자로 객체를 넣을 수 있음
 * params라는 key에 값을 넣어주면 쿼리로 들어갈 수 있음
 */  
export const searchProduct = (params) => {
  return apiClient.get("/products/search",{
    params,
  });
};

// 아래와 같이 쓰이게 됨
// searchProduct({ q: "phone" });

/**
 * POST요청
 * url에 add라고 동사가 들어가면 좋지 않음..
 */
export const createProduct = (body) => {
  return apiClient.post("./products/add", body);
}