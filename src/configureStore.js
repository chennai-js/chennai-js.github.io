import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createRootReducer from "./reducers";
import saga from "./sagas";

export const history = createBrowserHistory();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware({});
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  // For devtools extension
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), ...middlewares))
  );

  sagaMiddleware.run(saga);

  return store;
};

export default configureStore;
