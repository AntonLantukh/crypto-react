import TYPES from "./types";

export const fetchCurrenciesRequest = () => {
  return {
    type: TYPES.FETCH_REQUEST
  };
};

export const fetchCurrenciesSuccess = payload => {
  return {
    type: TYPES.FETCH_SUCCESS,
    payload
  };
};

export const fetchCurrenciesFailure = payload => {
  return {
    type: TYPES.FETCH_FAILURE,
    payload
  };
};
