import TYPES from "./types";

export const currencies = (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_SUCCESS:
      return {
        ...state,
        currencies: action.payload
      };
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case TYPES.FETCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case TYPES.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export const isLoaded = (state = false, action) => {
  switch (action.type) {
    case TYPES.FETCH_REQUEST:
      return {
        ...state,
        isLoaded: false
      };
    case TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isLoaded: true
      };
    case TYPES.FETCH_FAILURE:
      return {
        ...state,
        isLoaded: false
      };
    default:
      return state;
  }
};

export const error = (state = null, action) => {
  switch (action.type) {
    case TYPES.FETCH_REQUEST:
      return {
        ...state,
        error: null
      };
    case TYPES.FETCH_SUCCESS:
      return {
        ...state,
        error: null
      };
    case TYPES.FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
