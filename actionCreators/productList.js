import {
  REQUEST_API,
  RECEIVE_API,
  GET_PRODUCT_LIST,
  PRODUCT_AVAILABLE,
  PRODUCT_UNAVAILABLE,
  SEARCH_PRODUCT_LIST,
  PRODUCT_SEARCH_LIST
} from "../actionTypes/productList";

export const requestApi = () => ({
  type: REQUEST_API
});

export const receiveApi = products => ({
  type: RECEIVE_API,
  products
});

export const productSearch = (searchText, products) => ({
  type: PRODUCT_SEARCH_LIST,
  searchText,
  products
});

export function getProductList() {
  return {
    type: GET_PRODUCT_LIST
  };
}

export function productAvailable(searchText) {
  return {
    type: PRODUCT_AVAILABLE,
    searchText
  };
}

export function productUnAvailable(error) {
  return {
    type: PRODUCT_UNAVAILABLE,
    error
  };
}

export function processSearchData(text) {
  return {
    type: SEARCH_PRODUCT_LIST,
    text
  };
}
