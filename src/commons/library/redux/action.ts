// 액션 타입 정의
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_CART = "SET_CART";

// 액션 생성자 함수
export const setProducts = (products: any) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setCart = (cart: any) => {
  return {
    type: SET_CART,
    payload: cart,
  };
};
