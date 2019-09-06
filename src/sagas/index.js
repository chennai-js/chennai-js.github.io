import { all } from "redux-saga/effects";

import jobs from "./jobs";
import slack from "./slack";

function* rootSaga() {
  yield all([...jobs, ...slack]);
}

export default rootSaga;
