import { put, call } from "redux-saga/effects";
import eventType from "redux/types/eventType";
import { requestStatusCheck } from "utils/httpErrors";

import notificationType from "redux/types/notificationType";

import {
  getEventByHashApi,
  postEventApi,
  deleteEventByHashApi,
} from "services/eventService";

export function* eventPostRequestSaga(data) {
  try {
    yield put({ type: eventType.EVENT_REQUEST });

    const api = requestStatusCheck(
      "create event",
      yield call(postEventApi, { ...data.event })
    );

    if (api.error) {
      yield put({
        type: eventType.EVENT_REQUEST_FAILURE,
      });

      yield put({
        type: notificationType.NOTIFICATION_REQUEST_ERROR,
        message: api.error,
      });
    } else {
      yield put({
        type: eventType.EVENT_REQUEST_SUCCESS,
        ...data.event,
        ...api.data,
      });

      yield put({
        type: notificationType.NOTIFICATION_REQUEST_SUCCESS,
        message: "Event successfully registered",
      });
    }

    return;
  } catch (error) {
    console.error(error);
    yield put({
      type: eventType.EVENT_REQUEST_FAILURE,
    });

    yield put({
      type: notificationType.NOTIFICATION_REQUEST_ERROR,
      message: error,
    });
  }
}
export function* eventGetByHashRequestSaga(data) {
  try {
    yield put({ type: eventType.EVENT_REQUEST });

    const api = requestStatusCheck(
      "get event",
      yield call(getEventByHashApi, data)
    );

    if (api.error) {
      yield put({
        type: eventType.EVENT_REQUEST_FAILURE,
      });

      yield put({
        type: notificationType.NOTIFICATION_REQUEST_ERROR,
        message: api.error,
      });
    } else {
      yield put({
        type: eventType.EVENT_REQUEST_SUCCESS,
        ...api.data,
      });
    }

    return;
  } catch (error) {
    console.error(error);
    yield put({
      type: notificationType.NOTIFICATION_REQUEST_ERROR,
      message: error,
    });
  }
}
export function* deleteEventByHashSaga(data) {
  try {
    yield put({ type: eventType.EVENT_REQUEST });

    const api = requestStatusCheck(
      "delete event",
      yield call(deleteEventByHashApi, data)
    );

    if (api.error) {
      yield put({
        type: notificationType.NOTIFICATION_REQUEST_ERROR,
        message: api.error,
      });
    } else {
      yield put({
        type: eventType.EVENT_CLEAR_DATA,
      });

      yield put({
        type: notificationType.NOTIFICATION_REQUEST_SUCCESS,
        message: "Event successfully deleted",
      });
    }

    return;
  } catch (error) {
    console.error(error);
    yield put({
      type: notificationType.NOTIFICATION_REQUEST_ERROR,
      message: error,
    });
  }
}
