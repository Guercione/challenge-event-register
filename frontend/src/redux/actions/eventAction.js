import Type from "redux/types/eventType";

export const eventPostRequest = (event) => ({
  type: Type.EVENT_POST_REQUEST,
  event,
});

export const eventGetByHashRequest = (hash) => ({
  type: Type.EVENT_GET_BY_HASH_REQUEST,
  hash,
});

export const eventDeleteRequest = (hash) => ({
  type: Type.EVENT_DELETE_REQUEST,
  hash,
});

export const eventClearData = () => ({
  type: Type.EVENT_CLEAR_DATA,
});
