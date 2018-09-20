import {
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
  fetchCurrenciesFailure
} from "./action";
import { currencies, isLoading, isLoaded, error } from "./reducer";
import { getActualCurrencies, isFetched, isFetching } from "./selector";

export {
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
  fetchCurrenciesFailure,
  currencies,
  isLoading,
  isLoaded,
  error,
  getActualCurrencies,
  isFetched,
  isFetching
};
