import {
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
  fetchCurrenciesFailure
} from "../ducks/currencies";

export const getCurrencies = () => dispatch => {
  setTimeout(() => {
    dispatch(fetchCurrenciesRequest());
    fetch(`https://api.coinmarketcap.com/v2/ticker/?limit=10`)
      .then(res => res.json())
      .then(
        data => dispatch(fetchCurrenciesSuccess(data)),
        err => dispatch(fetchCurrenciesFailure(err))
      );
  }, 2000);
};
