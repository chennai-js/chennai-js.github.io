import { takeEvery, call, put } from "redux-saga/effects";

import * as api from "src/api";
import * as atypes from "src/constants/actionTypes";

function* joinSlack({ payload }) {
  try {
    yield call(api.requestSlackAccess, payload);
    yield put({
      type: atypes.JOIN_SLACK_SUCCESS,
      payload: {}
    });
  } catch (error) {
    yield put({
      type: atypes.JOIN_SLACK_FAILURE,
      payload: {}
    });
  }
}

function* watchJoinSlack() {
  yield takeEvery(atypes.JOIN_SLACK_REQUEST, joinSlack);
}

export default [watchJoinSlack()];
