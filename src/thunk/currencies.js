import {
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
  fetchCurrenciesFailure
} from "../ducks/currencies";

import { data } from "./quotes.js";

// export const getCurrencies = () => dispatch => {
//   setTimeout(() => {
//     dispatch(fetchCurrenciesRequest());
//     fetch(`https://api.coinmarketcap.com/v2/ticker/?limit=10`)
//       .then(res => res.json())
//       .then(
//         data => dispatch(fetchCurrenciesSuccess(data)),
//         err => dispatch(fetchCurrenciesFailure(err))
//       );
//   }, 2000);
// };

export const getCurrencies = () => dispatch => {
  dispatch(fetchCurrenciesRequest());
  dispatch(fetchCurrenciesSuccess(data));
};
