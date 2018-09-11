import {
  RECEIVE_API,
  PRODUCT_SEARCH_LIST
} from "../actionTypes/productList";

export default (
  state = {
    isLoading: true,
    products: [],
    filterData: [],
    searchText: ""
  },
  { type, products, searchText }
) => {
  //console.log("Type=>", type);
  switch (type) {
    case RECEIVE_API:
      return { ...state, isLoading: false, products: products };
    case PRODUCT_SEARCH_LIST:
      return {
        ...state,
        isLoading: false,
        filterData: products.filter(function(item) {
          return (
            item.title.toLowerCase().search(searchText.toLowerCase()) !== -1
          );
        })
      };
    default:
      return state;
  }
};
