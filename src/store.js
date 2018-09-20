import { createStore, applyMiddleware } from "redux";
import rootReducer from "./ducks";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default createAppStore;
