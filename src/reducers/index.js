import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import jobs from "./jobs";
import slack from "./slack";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    jobs,
    slack
  });

export default createRootReducer;
