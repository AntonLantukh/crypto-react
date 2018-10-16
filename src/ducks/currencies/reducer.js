import TYPES from "./types";

export const currencies = (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case TYPES.FETCH_REQUEST:
      return true;
    case TYPES.FETCH_SUCCESS:
      return false;
    case TYPES.FETCH_FAILURE:
      return false;
    default:
      return state;
  }
};

export const isLoaded = (state = false, action) => {
  switch (action.type) {
    case TYPES.FETCH_REQUEST:
      return false;
    case TYPES.FETCH_SUCCESS:
      return true;
    case TYPES.FETCH_FAILURE:
      return false;
    default:
      return state;
  }
};

export const error = (state = null, action) => {
  switch (action.type) {
    case TYPES.FETCH_REQUEST:
      return null;
    case TYPES.FETCH_SUCCESS:
      return null;
    case TYPES.FETCH_FAILURE:
      return action.payload;
    default:
      return state;
  }
};
