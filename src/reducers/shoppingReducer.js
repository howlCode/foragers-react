import {
  ADD_PRODUCT_TO_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART_SUCCESS
} from "../actions/shoppingActions";

const initialState = {
  itemsInCart: [],
  subTotal: 0
};

export default function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        itemsInCart: [...state.itemsInCart, action.payload.product],
        subTotal: [...state.itemsInCart]
          .reduce(
            (total, item) => total + item.cost,
            action.payload.product.cost
          )
          .toFixed(2)
      };

    case REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        itemsInCart: state.itemsInCart.filter(
          product => product !== action.payload.product
        ),
        subTotal: [...state.itemsInCart]
          .reduce(
            (total, item) => total - item.cost,
            action.payload.product.cost
          )
          .toFixed(2)
      };

    default:
      return { ...state };
  }
}
