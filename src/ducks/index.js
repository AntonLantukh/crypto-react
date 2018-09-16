import { combineReducers } from "redux";
import { currencies, isLoading, isLoaded, error } from "./currencies";

export default combineReducers({
  currencies,
  isLoading,
  isLoaded,
  error
});
