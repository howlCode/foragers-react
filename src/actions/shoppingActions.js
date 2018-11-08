export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";

export const addProductsSuccess = product => ({
  type: ADD_PRODUCT_TO_CART_SUCCESS,
  payload: { product }
});

export function addProducts(product) {
  return dispatch => {
    dispatch(addProductsSuccess(product));
  };
}
