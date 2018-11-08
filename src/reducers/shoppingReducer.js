import {
  ADD_PRODUCT_TO_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART_SUCCESS
} from "../actions/shoppingActions";

const initialState = {
  itemsInCart: []
};

export default function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        itemsInCart: [...state.itemsInCart, action.payload.product]
      };

    case REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        itemsInCart: state.itemsInCart.filter(
          product => product !== action.payload.product
        )
      };

    default:
      return state;
  }
}
