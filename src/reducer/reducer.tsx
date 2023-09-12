export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {
        products: [],
        productsError: false,
      };
    case "FETCH_PRODUCT_SUCESS":
      return {
        ...state,
        products: action.payload,
      };
    case "FETCH_PRODUCT_FAIL":
      return {
        ...state,
        productsError: true,
      };

    case "FETCH_PRODUCT_DETAIL":
      return {
        productDetail: {},
        productDetailError: false,
      };
    case "FETCH_PRODUCT_DETAIL_SUCESS":
      return {
        ...state,
        productDetail: action.payload,
      };
    case "FETCH_PRODUCT_DETAIL_FAIL":
      return {
        ...state,
        productDetailError: true,
      };



      case "SET_CART":
        return {
          cart: {},
          cartError: false,
        };
      case "SET_CART_SUCESS":
        return {
          ...state,
          cart: [ ...state.cart , action.payload ] ,
        };
      case "SET_CART_FAIL":
        return {
          ...state,
          cartError: true,
        };



    default:
      throw new Error();
  }
};
