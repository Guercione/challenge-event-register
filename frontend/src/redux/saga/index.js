import { takeLatest, all } from "redux-saga/effects";

import types from "redux/types/eventType";
import {
  eventPostRequestSaga,
  eventGetByHashRequestSaga,
  deleteEventByHashSaga,
} from "./eventSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(types.EVENT_POST_REQUEST, eventPostRequestSaga),
    takeLatest(types.EVENT_GET_BY_HASH_REQUEST, eventGetByHashRequestSaga),
    takeLatest(types.EVENT_DELETE_REQUEST, deleteEventByHashSaga),
  ]);
}
