import { combineReducers } from "redux";
import authReducer from "./authReducer";
import shroomsReducer from "./shroomsReducer";
import coursesReducer from "./coursesReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
  auth: authReducer,
  shrooms: shroomsReducer,
  courses: coursesReducer,
  products: productsReducer
});
