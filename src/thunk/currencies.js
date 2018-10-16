import {
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
  fetchCurrenciesFailure
} from "../ducks/currencies";

export const getCurrencies = () => dispatch => {
  setInterval(() => {
    dispatch(fetchCurrenciesRequest());
    fetch(`https://api.coinmarketcap.com/v2/ticker/?limit=12`)
      .then(res => res.json())
      .then(
        answ => {
          const values = Object.values(answ.data);
          dispatch(fetchCurrenciesSuccess(values))
        },
        err => dispatch(fetchCurrenciesFailure(err))
      );
  }, 3000);
};
