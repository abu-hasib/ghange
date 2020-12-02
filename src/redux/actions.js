import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_ERROR,
} from "./actionTypes";

export const addProductToCart = (product) => {
  console.log("@@@:", product);
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const removeProductToCart = (productId) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  };
};

export function fetchProductsPending() {
  console.log("Runnunf......: ")
  return {
    type: FETCH_PRODUCTS_PENDING,
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
}

export function fetchProductsError(error) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    error: error,
  };
}
