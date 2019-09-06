import { takeEvery, call, put } from "redux-saga/effects";

import * as api from "src/api";
import * as atypes from "src/constants/actionTypes";

function* getJobs() {
  try {
    const jobs = yield call(api.getJobs);
    yield put({
      type: atypes.GET_JOBS_SUCCESS,
      payload: {
        jobs
      }
    });
  } catch (error) {
    yield put({
      type: atypes.GET_JOBS_FAILURE,
      payload: {
        error
      }
    });
  }
}

function* watchGetJobs() {
  yield takeEvery(atypes.GET_JOBS_REQUEST, getJobs);
}

export default [watchGetJobs()];
