import {
  GET_PRODUCT_LIST,
  PRODUCT_AVAILABLE,
  PRODUCT_UNAVAILABLE,
  SEARCH_PRODUCT_LIST
} from "../actionTypes/productList";

export default (
  initState = {
    products: [],
    isLoding: true,
    text: ""
  },
  action
) => {
 
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return { ...initState, isLoding: true };
    case PRODUCT_AVAILABLE:
      return { ...initState, isLoding: false, products: action.products };
    case PRODUCT_UNAVAILABLE:
      return { ...initState, isLoding: true, error: action.error };
    case SEARCH_PRODUCT_LIST:
      console.log(action.text);
      return { ...initState, isLoding: true, text: action.text };
    default:
      return initState;
  }
};
