import { api } from '../data/api';

export const fetchProducts = async (dispatch: any) => {
    dispatch({
      type: "FETCH_PRODUCT"
    });
    try {
      const results = await api.get(`https://dummyjson.com/products`)
      dispatch({
        type: "FETCH_PRODUCT_SUCESS",
        payload: results.data
      });
    } catch(error: any) {
      if (error.response.status === 401){
        dispatch({
          type: "FETCH_PRODUCT_FAIL"
        });
      }
  
      throw error
    }
  }


  export const fetchProductDetail = async ({ dispatch, id }: { dispatch: any; id: any }) => {
   
    dispatch({
      type: "FETCH_PRODUCT_DETAIL"
    });
    try {
      const results = await api.get(`https://dummyjson.com/products/${id}`)
      dispatch({
        type: "FETCH_PRODUCT_DETAIL_SUCESS",
        payload: results.data
      });
    } catch(error: any) {
      if (error.response.status === 401){
        dispatch({
          type: "FETCH_PRODUCT_DETAIL_FAIL"
        });
      }
  
      throw error
    }
  }



  export const setCart = async ({ dispatch, value }: { dispatch: any; value: any }) => {
   
    dispatch({
      type: "SET_CART"
    });
    try {
     dispatch({
        type: "SET_CART_SUCESS",
        payload: value
      });
    } catch(error: any) {
      if (error.response.status === 401){
        dispatch({
          type: "SET_CART_FAIL"
        });
      }
  
      throw error
    }
  }